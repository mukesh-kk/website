# OpenID Connect (OIDC) in Gitpod

You can use OIDC authentication to connect Gitpod workspaces to cloud providers and/or other third party services such as AWS, Azure, GCP, or secret management services like Vault. Through OIDC you can connect with a third party, eliminating the need to manually distribute access credentials, secrets and other key material via environment variables. 

## What is OIDC?

OpenID Connect (OIDC) allows third-party applications to verify identity. <abbr title="JSON Web Token">JWT</abbr>s contain claims (such as a name or email address) about your workspace. You can create custom claims and add them to your tokens.

## Setting up OIDC Authentication with Any Provider

<figure>

![](/images/docs/oidc-flow.png)

<figcaption>
    Sequence diagram of Authentication via OIDC using AWS with Gitpod
</figcaption>

</figure>

**Read more:**

- https://auth0.com/docs/authenticate/protocols/openid-connect-protocol

## Experimental Gitpod CLI integration

You can interface with Gitpod's IdP using the `gp idp` subcommand. To retrieve the OIDC token for the current workspace simply run `gp idp token`, to return a JWT that can be exchanged with a third party service to grant access.

For example, to request a new OIDC JWT for `example.org` you'll need to execute `gp idp token --audience example.org`, the output of which you can use to authenticate yourself.
