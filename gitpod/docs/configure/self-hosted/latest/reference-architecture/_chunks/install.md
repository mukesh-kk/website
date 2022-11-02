---
layout: false
---

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
</script>

Congratulations. You have set up your cluster. Now, you are ready to install Gitpod. Follow the instructions in the [installation guide](../installing-gitpod#install-gitpod).

<CloudPlatformToggle id="cloud-platform-toggle-install">
<div slot="gcp">

If you followed the steps to create your infrastructure on GCP of this guide, you need to use the following config settings for your Gitpod installation:

| General settings |                         |
| ---------------- | ----------------------- |
| Domain name      | value of `$DOMAIN_NAME` |

Un-select the in-cluster container registry checkbox.

| Container registry          |                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| In-cluster                  | no                                                                                                       |
| Container registry URL      | `gcr.io/${PROJECT_NAME}/gitpod`<br/>(replace `${PROJECT_NAME}` with your GCP project name)               |
| Container registry server   | `gcr.io`                                                                                                 |
| Container registry username | `_json_key`                                                                                              |
| Container registry password | Content of file `./gs-credentials.json`<br/>Remove linebreaks, e.g. with `jq -c . ./gs-credentials.json` |

Un-select the in-cluster MySQL checkbox.

| Database                 |                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| In-cluster               | no                                                                                           |
| Google Cloud SQL Proxy   | yes                                                                                          |
| CloudSQL connection name | `${PROJECT_NAME}:${REGION}:${MYSQL_INSTANCE_NAME}`<br/>Replace variables with actual values! |
| Username                 | value of `${MYSQL_GITPOD_USERNAME}`                                                          |
| Password                 | value of `${MYSQL_GITPOD_PASSWORD}`                                                          |
| GCP service account key  | Upload file `./mysql-credentials.json`                                                       |

Select `GCP` as object storage provider.

| Object storage      |                                     |
| ------------------- | ----------------------------------- |
| Storage provider    | GCP                                 |
| Storage region      | value of `${REGION}`                |
| Project ID          | value of `${PROJECT_NAME}`          |
| Service account key | Upload file `./gs-credentials.json` |

Keep cert-manager selected for the TLS certificates options.

| TLS certificates            |                         |
| --------------------------- | ----------------------- |
| Self-signed TLS certificate | no                      |
| cert-manager                | yes                     |
| Issuer name                 | `gitpod-issuer`         |
| Issuer type                 | Select “cluster issuer” |

</div>

<div slot="aws">

If you followed the steps to create your infrastructure on the AWS portion of this guide, you need to use the following config settings for your Gitpod installation:

| General Settings |                         |
| ---------------- | ----------------------- |
| Domain name      | value of `$DOMAIN_NAME` |

Select the in-cluster registry checkbox, and select the **S3** storage provider.

| Container registry |                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| Storage region     | The S3 bucket region (such as `eu-west-1`)                                                           |
| Storage endpoint   | `s3.${S3_BUCKET_REGION}.amazonaws.com`<br/>(Replace `${S3_BUCKET_REGION}` with the s3 bucket region) |
| S3 bucket name     | value of `${S3_BUCKET_NAME}`                                                                         |
| S3 access key      | value of `AccessKeyId`                                                                               |
| S3 secret key      | value of `SecretAccessKey`                                                                           |

Unselect the **Use MySQL in-cluster** checkbox and also make sure that the **Use Google Cloud SQL Proxy** checkbox is not selected.

| Database |                                  |
| -------- | -------------------------------- |
| Hostname | value of `${MYSQL_RDS_ENDPOINT}` |
| Username | `gitpod`                         |
| Password | value of `${MYSQL_GITPOD_PW}`    |

Select **S3** as the object storage provider.

| Object storage   |                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Storage region   | The S3 bucket region (such as `eu-west-1`)                                                           |
| Storage endpoint | `s3.${S3_BUCKET_REGION}.amazonaws.com`<br/>(Replace `${S3_BUCKET_REGION}` with the s3 bucket region) |
| S3 bucket name   | value of `${S3_BUCKET_NAME}`                                                                         |
| S3 access key    | value of `AccessKeyId`                                                                               |
| S3 secret key    | value of `SecretAccessKey`                                                                           |

Keep cert-manager selected for the TLS certificates options.

| TLS certificates            |                         |
| --------------------------- | ----------------------- |
| Self-signed TLS certificate | no                      |
| cert-manager                | yes                     |
| Issuer name                 | `gitpod-issuer`         |
| Issuer type                 | Select “cluster issuer” |

</div>

<div slot="azure">

If you followed the steps to create your infrastructure on the Azure portion of this guide, use the following config settings for your Gitpod installation:

| General Settings |                         |
| ---------------- | ----------------------- |
| Domain name      | value of `$DOMAIN_NAME` |

Un-select the in-cluster container registry checkbox.

| Container registry          |                                       |
| --------------------------- | ------------------------------------- |
| In-cluster                  | no                                    |
| Container registry URL      | Value of `${AZURE_REGISTRY_URL}`      |
| Container registry server   | Leave empty                           |
| Container registry username | Value of `${AZURE_REGISTRY_USERNAME}` |
| Container registry password | Value of `${AZURE_REGISTRY_PASSWORD}` |

Un-select the in-cluster MySQL checkbox.

| Database                 |                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| In-cluster               | no                                                                                                                     |
| Google Cloud SQL Proxy   | unchecked                                                                                                              |
| Host                     | `${MYSQL_INSTANCE_NAME}.mysql.database.azure.com` <br/>(Replace `${MYSQL_INSTANCE_NAME}` with the Azure database name) |
| Username                 | Value of `${MYSQL_GITPOD_USERNAME}@${MYSQL_INSTANCE_NAME}`                                                             |
| Password                 | value of `${MYSQL_GITPOD_PASSWORD}`                                                                                    |
| Password                 | Use default value (`3306`)                                                                                             |

Select **Azure** as the object storage provider.

| Object storage   |                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Storage region   | value of `${LOCATION}`                                                                               |
| Account name     | value of `${STORAGE_ACCOUNT_NAME}`                                                                   |
| Access key       | value of `${STORAGE_ACCOUNT_KEY}`                                                                    |

Keep cert-manager selected for the TLS certificates options.

| TLS certificates            |                         |
| --------------------------- | ----------------------- |
| Self-signed TLS certificate | no                      |
| cert-manager                | yes                     |
| Issuer name                 | `gitpod-issuer`         |
| Issuer type                 | Select “cluster issuer” |


</div>

</CloudPlatformToggle>
