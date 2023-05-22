---
section: integrations
title: AWS
---

<script context="module">
  export const prerender = true;
</script>

# Setting up OIDC Authentication with AWS

To use an <abbr title="Identity Provider">IdP</abbr>, you create an IAM identity provider entity to establish a trust relationship between your AWS account and the IdP. Using OIDC authentication with AWS gives you fine-grained control of which Gitpod workspaces can access what resources inside of your cloud account.

## Step 1: Create an "AWS Identity Provider" resource

AWS Identity Providers allow you to manage user identities outside of AWS, instead of creating IAM users in your AWS account and give these external identities (e.g. Gitpod workspaces) permissions to use AWS resources in your account.

Configure the URL of the identity provider to: `https://api.<your-installation>/idp`

For example: `https://api.gitpod.io/idp`.

**Read more:**

- [[AWS docs] Creating IAM identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create.html)
- [[AWS docs] Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)

## Step 2: Create an AWS role with a trust policy

Now that your AWS account is setup to trust Gitpod, you need to create an AWS IAM role that can be assumed by the Gitpod workspace. Here, you can also restrict who has access to the assumed role based on claims in your Gitpod workspace JWT token.

> 💡 **Important**: We strongly recommend you adhere to the principle of least privilege, and ensure that only relevant workspaces and users can assume your AWS role.

<figure>

```json
{
  "iss": "https://api.dev-internal.gitpod.cloud/idp",
  "aud": ["sts.amazonaws.com"],
  "azp": "sts.amazonaws.com",
  "c_hash": "zSrbWN_X9Wx52-wxjgdX5w",
  "exp": 1682344961,
  "iat": 1682341361,
  "auth_time": 1682341361,
  "sub": "https://github.com/gitpod-io/gitpod",
  "name": "loujaybee"
}
```

  <figcaption>
    Example claims in the OIDC JWT.
  </figcaption>
</figure>

To adjust the IAM role trust policy to restrict which workspaces can assume the role. You can define conditions keys using the name of the OIDC provider (created in step 1, e.g. `gitpod.io`) followed by the claim (`:aud`, `:azp`, `:amr`, `sub`).

<figure>

```json
{
  Action    = "sts:AssumeRoleWithWebIdentity"
  Condition = {
    StringEquals = {
      "gitpod.io/idp:aud" = "sts.amazonaws.com",
      "gitpod.io/idp:sub": "https://github.com/loujaybee/oidc-consumer"
    }
  }
  Effect = "Allow"
  Principal = {
    Federated = "arn:aws:iam::790285888667:oidc-provider/api.dev-internal.gitpod.cloud/idp"
  }
}
```

  <figcaption>
    Example IAM role assume role trust policy.
  </figcaption>
</figure>

**Read more:**

- [[AWS docs] IAM and AWS STS condition context keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html)

## Step 3: Assume the AWS role to retrieve the AWS credentials

> 💡 **Important**: The following assumes that your workspace has the AWS CLI installed so that it can call `aws sts assume-role-with-web-identity`.

The following code will login to AWS using OIDC and then fetch a secret dynamically from AWS Secrets Manager for use in your application.

<figure>

```yaml
tasks:
  - command: |
    gp idp login aws --role-arn <your-iam-role-arn>
    aws secretsmanager get-secret-value --secret-id database_connection_string --region us-east-1 | jq .SecretString
```

  <figcaption>
    Example <code>.gitpod.yml</code> that assumes a web identity role.
  </figcaption>
</figure>

Read more:

- [[AWS docs] `assume-role-with-web-identity`](https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-web-identity.html)
