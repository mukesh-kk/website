---
section: user-settings
title: Access Tokens
---

<script context="module">
  export const prerender = true;
</script>

# Access Tokens

Access Tokens are secrets which allow you to interact with Gitpod through our APIs. When you use an Access Token, all actions done with the token
will happen as if the Access Token creator performed them.

![Create Access Token](../../../static/images/docs/access-token-create.png)

## Permissions (Scopes)

Each Access Token either has:

- No Access.
- Full Access to Resources and APIs which the token owner also has access to.

By default, an Access Token has **No Access**. You need to explicitly select Full Access to succesfully authorize.

In the future, we will expand Access Tokens with fine grained permissions.

## Expiration

All Access Tokens have an expiration time. When a token expires, requests made with the token will fail with Unathorized. When a token expires, you can [regenerate](#regenerating-access-tokens) it.

## Managing Access Tokens

### Listing Access Tokens

You can list your Access Tokens in your user Settings, or by going to [gitpod.io/tokens](https://gitpod.io/tokens).

![List Access Tokens](../../../static/images/docs/access-token-list.png)

### Creating an Access Token

You can create an Access Token by navigating to [gitpod.io/tokens](https://gitpod.io/tokens) or through Settings > Access Tokens. Clicking **New Access Token** will prompt you to specify details of the token.

- Your access tokens will automatically expire after the specified duration.
- Once you create an Access Token, it will be shown to you **once**. Make sure you store it in a secure place, you will not be able to retrieve it again.

## Updating an Access Token

Access Token can be updated. You can update the following properties on a token:

- Name
- Permission scopes

When you update a token, the token secret remains unaffected and you can continue to use it, until it expires.

## Regenerating Access Tokens

Access Token can be regenerated. Regenerating a token will:

- Create a new token secret, which you'll need to store in a secure place and replace your old one.
- The new token will have a new expiration time.
- The old token will no longer be valid and will receive Unathorized when interacting with APIs.

## Deleting Access Tokens

Personal Access token can be deleted. Once deleted, the token is no longer valid for interaction with APIs.
