# OIDC in Gitpod

You can now use OIDC authentication to connect Gitpod workspaces to cloud providers and/or other third party services such as AWS, Azure, GCP, or secret management services like Vault. Through OIDC you can connect with a secret store using a temporary access token and eliminate the need to manually distribute secrets through environment variables. You can fetch temporary access tokens for your workspaces, which gives you fine-grained control over which of your Gitpod workspaces can have certain access.

## What is OIDC?

OpenID Connect (OIDC) allows third-party applications to verify identity. <abbr title="JSON Web Token">JWT</abbr>s contain claims (such as a name or email address) about your workspace. You can create custom claims and add them to your tokens.

## Setting up OIDC Authentication with Any Provider

To retrieve the OIDC token for the current workspace simply run `gp idp token`, to return a JWT that can be exchanged with a third party service to grant access.

<figure>

![](/images/docs/oidc-flow.png)

<figcaption>
    Sequence diagram of Authentication via OIDC using AWS with Gitpod
</figcaption>

</figure>
