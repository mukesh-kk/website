---
layout: false
---

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
</script>

Gitpod uses a **relational database management system** to store structural data. Gitpod supports MySQL. The database is a central component in Gitpod where all metadata about users and workspaces as well as settings of the Gitpod instance (such as auth providers) are stored. That makes the database a critical component. In case of a database outage, you will not be able to log in, use the Gitpod dashboard, or start workspaces.

In this reference architecture, we use managed MYSQL databases provided by cloud providers.

> Gitpod requires your database instance to have a database named `gitpod` in it.

<CloudPlatformToggle id="cloud-platform-toggle-database">
<div slot="gcp">

As a relational database, we create a [Google Cloud SQL instance](https://cloud.google.com/sql) with MySQL 5.7. Use the following commands to create the database instance:

```bash
MYSQL_INSTANCE_NAME=gitpod-mysql
gcloud sql instances create "${MYSQL_INSTANCE_NAME}" \
    --database-version=MYSQL_5_7 \
    --storage-size=20 \
    --storage-auto-increase \
    --tier=db-n1-standard-2 \
    --region="${REGION}" \
    --replica-type=FAILOVER \
    --enable-bin-log

gcloud sql instances patch "${MYSQL_INSTANCE_NAME}" --database-flags \
            explicit_defaults_for_timestamp=off
```

After that, we create the database named `gitpod` as well as a dedicated Gitpod database user with a random password.

```bash
gcloud sql databases create gitpod --instance="${MYSQL_INSTANCE_NAME}"

MYSQL_GITPOD_USERNAME=gitpod
MYSQL_GITPOD_PASSWORD=$(openssl rand -base64 20)
gcloud sql users create "${MYSQL_GITPOD_USERNAME}" \
    --instance="${MYSQL_INSTANCE_NAME}" \
    --password="${MYSQL_GITPOD_PASSWORD}"
```

Finally, you need to create a service account that has the `roles/cloudsql.client` role:

```bash
MYSQL_SA=gitpod-mysql
MYSQL_SA_EMAIL="${MYSQL_SA}"@"${PROJECT_NAME}".iam.gserviceaccount.com
gcloud iam service-accounts create "${MYSQL_SA}" --display-name "${MYSQL_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" \
    --member serviceAccount:"${MYSQL_SA_EMAIL}" --role="roles/cloudsql.client"
```

Save the service account key to the file `./mysql-credentials.json`:

```bash
gcloud iam service-accounts keys create --iam-account "${MYSQL_SA_EMAIL}" \
    ./mysql-credentials.json
```

</div>
<div slot="aws">

We will create an RDS MySQL `db.m5g.large` instance running MySQL 5.7. Before deploying an RDS instance, additional configuration has to be done to the VPC created by the `eksctl` command:

### Create an RDS security group

First, find the subnet IDs for the public subnets in your environment. For deploying RDS in private subnets replace true with false in the below command:

```bash
aws ec2 describe-subnets \
    --filters "Name=tag:project,Values=gitpod" \
    --query 'Subnets[?MapPublicIpOnLaunch==`true`] | [*].[SubnetId, AvailabilityZone, CidrBlock, MapPublicIpOnLaunch]'
```

This should give you an output similar to the following:

```bash
[
    [
        "<SubnetID, similar to: subnet-0686443f3f2782453>",
        "eu-west-1a",
        "192.168.64.0/19",
        true
    ],
    [
        "<SubnetID, similar to: subnet-010ea25d0e398f6df>",
        "eu-west-1c",
        "192.168.0.0/19",
        true
    ],
    [
        "<SubnetID, similar to: subnet-0f0370a5697d85df2>",
        "eu-west-1b",
        "192.168.32.0/19",
        true
    ]
]
```

Using the three subnet IDs, create an RDS subnet group, with the name `gitpod-rds`:

```bash
aws rds create-db-subnet-group \
    --db-subnet-group-name gitpod-rds \
    --db-subnet-group-description "Subnet for the Gitpod RDS deployment in VPC" \
    --subnet-ids '[ "<SubnetID 1 from above, similar to: subnet-0686443f3f2782453>", "SubnetID 2 from above, similar to: subnet-010ea25d0e398f6df>", "SubnetID 3 from above, similar to: subnet-0f0370a5697d85df2>" ]' \
    --tags Key=project,Value=gitpod
```

Now you will need to create a security group for the RDS instance, running a similar command as before. Note you can get your vpc-id via:

```bash
aws ec2 describe-vpcs --filters "Name=tag:project,Values=gitpod" --query 'Vpcs[*].[VpcId, CidrBlock]'
```

Create the security group for the RDS instance:

```bash
aws ec2 create-security-group --description 'Gitpod RDS' --group-name 'gitpod-rds' \
    --vpc-id <your VPC ID, similar to: vpc-09a109f23dad0a298> \
    --tag-specifications 'ResourceType=security-group,Tags=[{Key=Name,Value=gitpod-rds-sg},{Key=project,Value=gitpod},{Key=department,Value=demo}]'
```

This should return an output that is similar to:

```bash
{
    "GroupId": "<GroupID similar to: sg-0e538ccac25bb1387>",
    "Tags": [
        {
            "Key": "project",
            "Value": "gitpod"
        },
        {
            "Key": "department",
            "Value": "demo"
        }
    ]
}
```

You can now update the ingress policy for the RDS group to allow for incoming connections from the Services nodegroup on port 3306, the MySQL port. This uses the services security group ID stored in an environment variable in the cluster section above:

```bash
aws ec2 authorize-security-group-ingress \
    --group-id <RDS securitygroup ID from above> \
    --protocol tcp --port 3306 \
    --source-group ${SERVICES_SECURITYGROUP_ID}\
    --tag-specifications 'ResourceType=security-group-rule,Tags=[{Key=Name,Value=rds-access},{Key=project,Value=gitpod},{Key=department,Value=demo}]'
```

Now you can create a password to use for MySQL. This will be required for the creation of the RDS instance and later for use by the Gitpod installer:

```bash
export MYSQL_GITPOD_PW=$(openssl rand -hex 18)
echo $MYSQL_GITPOD_PW
```

Now you can create the [Multi-AZ RDS instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html) using the MySQL password, the security group, and RDS subnet you created in the previous steps:

```bash
aws rds create-db-instance \
    --db-name gitpod \
    --db-instance-identifier gitpod-instance \
    --db-instance-class db.m5.large \
    --db-subnet-group-name gitpod-rds \
    --vpc-security-group-ids sg-0e538ccac25bb1387 \
    --multi-az \
    --engine mysql \
    --allocated-storage 20 \
    --max-allocated-storage 120 \
    --master-username gitpod \
    --master-user-password $MYSQL_GITPOD_PW \
    --engine-version 5.7 \
    --tags Key=project,Value=gitpod Key=Name,Value=Gitpod-MySQLDB,Key=department,Value=demo
```

This should return an output similar to the following:

```bash
{
    "DBInstance": {
        "DBInstanceIdentifier": "gitpod-instance",
        "DBInstanceClass": "db.m5.large",
        "Engine": "mysql",
        "DBInstanceStatus": "creating",
        "MasterUsername": "gitpod",
        "DBName": "gitpod",
        "AllocatedStorage": 20,
        "PreferredBackupWindow": "22:11-22:41",
        "BackupRetentionPeriod": 1,
        "DBSecurityGroups": [],
        "VpcSecurityGroups": [
[...]
```

To check whether instance creation has compeleted, and to retrieve the URL to use, run this command:

```bash
aws rds describe-db-instances \
    --db-instance-identifier gitpod-instance \
    --query 'DBInstances[0].[DBInstanceStatus,Endpoint.Address]'
```

Returning:

```bash
[
    "modifying",
    "<instance endpoint, similar to: gitpod-instance.coynfywwqpjg.eu-west-1.rds.amazonaws.com>"
]
```

Store the MySQL instance endpoint for later use in the Gitpod installer:

```bash
export MYSQL_RDS_ENDPOINT="$(aws rds describe-db-instances --db-instance-identifier gitpod-instance --query 'DBInstances[0].Endpoint.Address' --output text)"
```

</div>
</CloudPlatformToggle>
