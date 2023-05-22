---
section: configure
title: OpenID Connect
---

<script context="module">
  export const prerender = true;
</script>

# OpenID Connect (OIDC) in Gitpod

You can use OIDC authentication to connect Gitpod workspaces to cloud providers and/or other third party services such as AWS, Azure, GCP, or secret management services like Vault. Through OIDC you can connect with a third party, eliminating the need to manually distribute access credentials, secrets and other key material via environment variables.

## What is OIDC?

OpenID Connect (OIDC) is a simple identity layer on top of the [OAuth 2.0 protocol](https://oauth.net/2/), which allows clients to verify the identity of an end-user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner.

OIDC introduces the concept of an Identity Token, a security token that allows the client to verify the identity of the user. The token is a <abbr title="JSON Web Token">JWT</abbr> that contains claims about the user. Claims are statements about a user, and can contain user information such as a name or email address.

OIDC provides a reliable way to establish a user's identity, including the ability to authenticate them and get their basic profile information. It gives third-party applications a standardized, secure, and scalable method to authenticate and authorize users. When used in combination with Gitpod, it helps in automating the secure access to 3rd-party services that your workspaces might need to interact with.

## Setting up OIDC Authentication with Any Provider

Setting up OIDC Authentication generally involves three main steps:

1. Establish Trust: This is where you register your application with the OIDC Provider (like AWS, Google, etc.). The provider then gives your application a unique client ID and secret, which your application uses to prove its identity to the provider.

1. Setup Trust Rules: This involves setting up rules on the provider's end about what information the provider can share with your application, and under what conditions.

1. Exchange the JWT Token: After trust is established and rules are set up, Gitpod's <abbr title="Identity Provider">IdP</abbr> will issue JWT tokens, which your application can then use these tokens to verify the identity of the user and gain access to their information according to the rules set up in the previous step.

<figure>

![OIDC flow via Gitpod](/images/docs/oidc-flow.png)

<figcaption>
    Sequence diagram of Authentication via OIDC using AWS with Gitpod
</figcaption>

Although this process is universal for all OIDC-compatible providers, we maintain the following docs that go in detail on setting them up:

- [AWS](/docs/integrations/aws)

</figure>

**Read more:**

- [[Auth0 docs] OpenID Connect Protocol](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol)

## Experimental Gitpod CLI integration

You can interface with Gitpod's IdP using the `gp idp` subcommand. To retrieve the OIDC token for the current workspace simply run `gp idp token`, to return a JWT that can be exchanged with a third party service to grant access.

For example, to request a new OIDC JWT for `example.org` you'll need to execute `gp idp token --audience example.org`, the output of which you can use to authenticate yourself.

### Example usage

```bash
$ gp idp token --audience example.org
eyJhbGciOiJSUzI1NiIsImtpZCI6ImlkLTE2ODQ3NTc4MDY...

$ jwt decode eyJh...
{
  "aud": [
    "example.org"
  ],
  "auth_time": 1684777794,
  "azp": "example.org",
  "c_hash": "gc_vPbUNoCT0UmXDCdp1sw",
  "email": "kumquat@gitpod.io",
  "email_verified": true,
  "exp": 1684781394,
  "iat": 1684777794,
  "iss": "https://api.gitpod.io/idp",
  "name": "Kumquat The Third",
  "sub": "https://github.com/gitpod-io/website/pull/1"
}
```
