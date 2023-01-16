---
section: gitpod-public-api
title: Gitpod public API
---

<script lang="ts">
  import APIExample from "$lib/components/docs/api-example.svelte";
</script>

<script context="module">
  export const prerender = true;
</script>

# Gitpod public API

> Access Tokens are currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/10798).

The Gitpod Public API grants direct access to Gitpod data for use cases such as integration into other 3rd party applications.

## Authentication

To authenticate requests, the Gitpod API utilises [Access Token](/docs/configure/user-settings/access-tokens). In the [Gitpod Settings](https://gitpod.io/tokens), you can view and manage your PAT Tokens (_Private Beta_).

Keep in mind that your access tokens have a lot of power, so protect them carefully! Avoid disclosing your private Access Tokens in areas that are open to the public, such as GitHub, client-side code, and so forth.

To Authenticate you will need to pass an Access Token as an Authorization request header bearer token in the format `Bearer <YOUR_ACCESS_TOKEN>`.

Example cURL command:

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/ListTeams' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{}'
```

## API Reference

## Resource: Workspaces

### List all workspaces

Lists all the workspaces belongs to the authenticated user. Currently, it returns only the first page of the results.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.WorkspacesService/ListWorkspaces' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{}'
```

</div>

<div slot="goExample">

```go
func ExampleListWorkspaces() {
	token := "<YOUR_ACCESS_TOKEN>"

	gitpod, err := client.New(client.WithCredentials(token))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to construct gitpod client %v", err)
		return
	}

	response, err := gitpod.Workspaces.ListWorkspaces(context.Background(), connect.NewRequest(&v1.ListWorkspacesRequest{}))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to list workspaces %v", err)
		return
	}

	fmt.Fprintf(os.Stdout, "Retrieved workspaces %v", response.Msg.GetResult())
}
```

</div>

<div slot="responseExample">

```json
{
  "result": [
    {
      "workspaceId": "<WORKSPACE_ID>",
      "ownerId": "<USER_ID>",
      "context": {
        "contextUrl": "https://github.com/gitpod-io/empty",
        "git": {
          "normalizedContextUrl": "https://github.com/gitpod-io/empty"
        }
      },
      "description": "gitpod-io/empty ",
      "status": {
        "instance": {
          "instanceId": "<INSTANCE_ID>",
          "workspaceId": "<WORKSPACE_ID>",
          "createdAt": "2022-12-19T08:36:47.254Z",
          "status": {
            "statusVersion": "<STATUS_VERSION>",
            "phase": "PHASE_STOPPED",
            "conditions": {},
            "url": "https://<WORKSPACE_ID>.ws-us79.gitpod.io",
            "admission": "ADMISSION_LEVEL_OWNER_ONLY"
          }
        }
      }
    }
  ]
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

|         Parameter          |                Description                | Type  | Required |
| :------------------------: | :---------------------------------------: | :---: | :------: |
| `pageSize` (_Coming Soon_) | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

|    Parameter    |                                                       Description                                                        |  Type  |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `nextPageToken` |                                                     Next Page Token                                                      | string |
|  `workspaceId`  |                                                       Workspace Id                                                       | string |
|    `ownerId`    |                                                         User Id                                                          | string |
|   `projectId`   |                                                        Project Id                                                        | string |
|    `context`    |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|    `status`     | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

### Get a workspace

Returns a single workspace.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.WorkspacesService/GetWorkspace' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"workspaceId":"<WORKSPACE_ID>"}'
```

</div>

<div slot="goExample">

```go
func ExampleGetWorkspace() {
	token := "<YOUR_ACCESS_TOKEN>"

	gitpod, err := client.New(client.WithCredentials(token))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to construct gitpod client %v", err)
		return
	}

	response, err := gitpod.Workspaces.GetWorkspace(context.Background(), connect.NewRequest(&v1.GetWorkspaceRequest{
		WorkspaceId: "<WORKSPACE_ID>",
	}))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to get workspace %v", err)
		return
	}

	fmt.Fprintf(os.Stdout, "Retrieved workspace %v", response.Msg.GetResult())
}
```

</div>

<div slot="responseExample">

```json
{
  "result": {
    "workspaceId": "<WORKSPACE_ID>",
    "ownerId": "<USER_ID>",
    "context": {
      "contextUrl": "https://github.com/gitpod-io/empty",
      "git": {
        "normalizedContextUrl": "https://github.com/gitpod-io/empty"
      }
    },
    "description": "gitpod-io/empty ",
    "status": {
      "instance": {
        "instanceId": "<INSTANCE_ID>",
        "workspaceId": "<WORKSPACE_ID>",
        "createdAt": "2022-12-22T07:43:16.152Z",
        "status": {
          "statusVersion": "<STATUS_VERSION>",
          "phase": "PHASE_RUNNING",
          "conditions": {
            "firstUserActivity": "2022-12-22T07:43:21.732Z"
          },
          "url": "https://<WORKSPACE_ID>.ws-us80.gitpod.io",
          "admission": "ADMISSION_LEVEL_OWNER_ONLY"
        }
      }
    }
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

|   Parameter   |                                                       Description                                                        |  Type  |
| :-----------: | :----------------------------------------------------------------------------------------------------------------------: | :----: |
| `workspaceId` |                                                       Workspace Id                                                       | string |
|   `ownerId`   |                                                         User Id                                                          | string |
|  `projectId`  |                                                        Project Id                                                        | string |
|   `context`   |                                 `contextUrl` with details of git or prebuild or snapshot                                 | string |
|   `status`    | will return Instance Id if currently assigned Instance Id to this workspace. Empty when there is no Instance Id assigned | string |

<!-- ### Get owner token

It returns the owner token of a workspace.

**Usage**: `GetOwnerToken()`

**Request Parameters**:

|   Parameter   | Description  |  Type  | Required |
| :-----------: | :----------: | :----: | :------: |
| `workspaceId` | Workspace Id | string |   true   |

<br>

**Response Parameters**:

| Parameter | Description |  Type  |
| :-------: | :---------: | :----: |
|  `token`  | Owner Token | string | -->

### Create Workspace (_Coming Soon_)

Creates a new workspace from any context URL (Repository, Issues, Pull Requests, Files, etc.)

### Start workspace (_Coming Soon_)

Starts an older workspace (instance).

**Usage**: `StartWorkspace()`

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|  `instanceId`  |         Instance Id          | string |
| `workspaceUrl` | URL of the started workspace | string |

### Stop workspace

Stops a running workspace (instance).

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.WorkspacesService/StopWorkspace' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"workspaceId":"<WORKSPACE_ID>"}'
```

</div>

<!-- Uncomment following, if we get some better response from API endpoint-->

<!-- <div slot="responseExample">

```json
{}
```

</div> -->

</APIExample>

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be stopped | string |   true   |

<br>

**Response**: It stops the requested workspace.

### Delete workspace

It deletes the workspace & also stops the workspace if it is running.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.WorkspacesService/DeleteWorkspace' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"workspaceId":"<WORKSPACE_ID>"}'
```

</div>

<!-- Uncomment following, if we get some better response from API endpoint-->

<!-- <div slot="responseExample">

```json
{}
```

</div> -->

</APIExample>

**Request Parameters**:

|   Parameter   |              Description              |  Type  | Required |
| :-----------: | :-----------------------------------: | :----: | :------: |
| `workspaceId` | Workspace Id that needs to be deleted | string |   true   |

<br>

**Response**: It deletes the requested workspace.

---

## Resource: Teams

### Create a team

Creates a team.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/CreateTeam' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"name":"<TEAM_NAME>"}'
```

</div>

<div slot="responseExample">

```json
{
  "team": {
    "id": "<TEAM_ID>",
    "name": "<TEAM_NAME>",
    "slug": "<team-slug>",
    "members": [
      {
        "userId": "<USER_ID>",
        "role": "TEAM_ROLE_OWNER",
        "memberSince": "2022-12-22T07:53:52.210Z",
        "avatarUrl": "<USER_AVATAR_URL>",
        "fullName": "<USER_FULL_NAME>",
        "primaryEmail": "<USER_EMAIL>"
      }
    ],
    "teamInvitation": { "id": "<TEAM_INVITATION_ID>" }
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

| Parameter | Description |  Type  | Required |
| :-------: | :---------: | :----: | :------: |
|  `name`   |  Team name  | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|      `id`      |         UUID of Team         | string |
|     `name`     |         Name of team         | string |
| `creationTime` |    Creation time of team     | string |
|     `slug`     | Short version of a Team name | string |
|   `members`    |  List of members in a team   | array  |

### Get a team

Returns a single team.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/GetTeam' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"teamId":"<TEAM_ID>"}'
```

</div>

<div slot="goExample">

```go
func ExampleGetTeam() {
	token := "<YOUR_ACCESS_TOKEN>"

	gitpod, err := client.New(client.WithCredentials(token))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to construct gitpod client %v", err)
		return
	}

	response, err := gitpod.Teams.GetTeam(context.Background(), connect.NewRequest(&v1.GetTeamRequest{
		TeamId: "<TEAM_ID>",
	}))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to get team %v", err)
		return
	}

	fmt.Fprintf(os.Stdout, "Retrieved team %v", response.Msg.GetTeam())
}
```

</div>

<div slot="responseExample">

```json
{
  "team": {
    "id": "<TEAM_ID>",
    "name": "<TEAM_NAME>",
    "slug": "<team-slug>",
    "members": [
      {
        "userId": "<USER_ID>",
        "role": "TEAM_ROLE_MEMBER",
        "memberSince": "2022-12-22T08:05:20.465Z",
        "avatarUrl": "<USER_AVATAR_URL>",
        "fullName": "<USER_FULL_NAME>'s Bot",
        "primaryEmail": "<USER_EMAIL>"
      },
      {
        "userId": "<USER_ID>",
        "role": "TEAM_ROLE_OWNER",
        "memberSince": "2022-12-22T07:53:52.210Z",
        "avatarUrl": "<USER_AVATAR_URL>",
        "fullName": "<USER_FULL_NAME>",
        "primaryEmail": "<USER_EMAIL>"
      }
    ],
    "teamInvitation": { "id": "<TEAM_INVITATION_ID>" }
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

| Parameter | Description |  Type  | Required |
| :-------: | :---------: | :----: | :------: |
| `teamId`  |   Team Id   | string |   true   |

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|      `id`      |         UUID of Team         | string |
|     `name`     |         Name of team         | string |
| `creationTime` |    Creation time of team     | string |
|     `slug`     | Short version of a Team name | string |
|   `members`    |  List of members in a team   | array  |

### List all teams

Lists all the teams belongs to the authenticated user.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/ListTeams' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{}'
```

</div>

<div slot="goExample">

```go
func ExampleListTeams() {
	token := "<YOUR_ACCESS_TOKEN>"
	gitpod, err := client.New(client.WithCredentials(token))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to construct gitpod client %v", err)
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	response, err := gitpod.Teams.ListTeams(ctx, connect.NewRequest(&v1.ListTeamsRequest{}))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to list teams %v", err)
		return
	}

	fmt.Fprintf(os.Stdout, "Retrieved teams %v", response.Msg.GetTeams())
}
```

</div>

<div slot="responseExample">

```json
{
  "teams": [
    {
      "id": "<TEAM_ID>",
      "name": "<TEAM_NAME>",
      "slug": "<team-slug>",
      "members": [
        {
          "userId": "<USER_ID>",
          "role": "TEAM_ROLE_OWNER",
          "memberSince": "2022-09-26T04:33:17.557Z",
          "avatarUrl": "<USER_AVATAR_URL>",
          "fullName": "<USER_FULL_NAME>",
          "primaryEmail": "<USER_EMAIL>"
        }
      ],
      "teamInvitation": { "id": "<TEAM_INVITATION_ID>" }
    },
    {
      "id": "<TEAM_ID>",
      "name": "<TEAM_NAME>",
      "slug": "<team-slug>",
      "members": [
        {
          "userId": "<USER_ID>",
          "role": "TEAM_ROLE_OWNER",
          "memberSince": "2022-09-25T15:41:41.352Z",
          "avatarUrl": "<USER_AVATAR_URL>",
          "fullName": "<USER_FULL_NAME>",
          "primaryEmail": "<USER_EMAIL>"
        }
      ],
      "teamInvitation": { "id": "<TEAM_INVITATION_ID>" }
    }
  ]
}
```

</div>

</APIExample>
<br>

**Request Parameters**:

| Parameter  |                Description                | Type  | Required |
| :--------: | :---------------------------------------: | :---: | :------: |
| `pageSize` | It is maximum number of results we expect | Int32 |  false   |

<br>

**Response Parameters**:

| Parameter |       Description       | Type  |
| :-------: | :---------------------: | :---: |
|  `teams`  | List of teams of a user | array |

### Join a team

Joins a team.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/JoinTeam' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"invitationId":"<TEAM_INVITATION_ID>"}'
```

</div>

<div slot="responseExample">

```json
{
  "team": {
    "id": "<TEAM_ID>",
    "name": "<TEAM_NAME>",
    "slug": "<team-slug>",
    "members": [
      {
        "userId": "<USER_ID>",
        "role": "TEAM_ROLE_OWNER",
        "memberSince": "2022-12-22T07:53:52.210Z",
        "avatarUrl": "<USER_AVATAR_URL>",
        "fullName": "<USER_FULL_NAME>",
        "primaryEmail": "<USER_EMAIL>"
      }
    ],
    "teamInvitation": { "id": "<TEAM_INVITATION_ID>" }
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

|   Parameter    |    Description     |  Type  | Required |
| :------------: | :----------------: | :----: | :------: |
| `invitationId` | Team Invitation ID | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |         Description          |  Type  |
| :------------: | :--------------------------: | :----: |
|      `id`      |         UUID of Team         | string |
|     `name`     |         Name of team         | string |
| `creationTime` |    Creation time of team     | string |
|     `slug`     | Short version of a Team name | string |
|   `members`    |  List of members in a team   | array  |

### Reset team invitation

Resets the team invitation.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/ResetTeamInvitation' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"teamId":"<TEAM_ID>"}'
```

</div>

<div slot="responseExample">

```json
{
  "teamInvitation": {
    "id": "<TEAM_INVITATION_ID>"
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

| Parameter |    Description     |  Type  | Required |
| :-------: | :----------------: | :----: | :------: |
| `teamId`  | Team Invitation ID | string |   true   |

<br>

**Response Parameters**:

|   Parameter    |        Description        |  Type  |
| :------------: | :-----------------------: | :----: |
| `invitationId` | new Invitation Id of Team | string |

### Update a team member role

Updates a team member role

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/UpdateTeamMember' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"teamId":"<TEAM_ID>", "teamMember": {"userId":"<USER_ID>", "role":"TEAM_ROLE_OWNER"}}'
```

</div>

<div slot="responseExample">

```json
{
  "teamMember": {
    "userId": "<USER_ID>",
    "role": "TEAM_ROLE_OWNER"
  }
}
```

</div>

</APIExample>

<br>

**Request Parameters**:

| Parameter |                          Description                           |  Type  | Required |
| :-------: | :------------------------------------------------------------: | :----: | :------: |
| `teamId`  |                           Team name                            | string |   true   |
| `userId`  |             User ID of a team member being updated             | string |   true   |
|  `role`   | Role of a team member: `TEAM_ROLE_OWNER` or `TEAM_ROLE_MEMBER` | string |   true   |

<br>

**Response Parameters**:

| Parameter |      Description       |  Type  |
| :-------: | :--------------------: | :----: |
| `userId`  | User ID of team member | string |
|  `role`   |    New role of team    | string |

### Delete team member

Deletes a team member.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/DeleteTeamMember' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"teamId":"<TEAM_ID>", "teamMemberId": "<USER_ID>"}'
```

</div>

<!-- Uncomment following, if we get some better response from API endpoint-->

<!-- <div slot="responseExample">

```json
{}
```

</div> -->

</APIExample>

<br>

**Request Parameters**:

|   Parameter    |           Description           |  Type  | Required |
| :------------: | :-----------------------------: | :----: | :------: |
|    `teamId`    |            Team name            | string |   true   |
| `teamMemberId` | Id of team member being updated | string |   true   |

<br>

**Response**: It deletes the team member from the team.

### Delete a team

Deletes a team.

<APIExample id="api-example">

<div slot="curlExample">

```bash title="cURL"
curl 'https://api.gitpod.io/gitpod.experimental.v1.TeamsService/DeleteTeam' \
  -H 'content-type: application/json' \
  -H 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
  --data '{"teamId":"<TEAM_ID>"}'
```

</div>

<!-- Uncomment following, if we get some better response from API endpoint-->

<!-- <div slot="responseExample">

```json
{}
```

</div> -->

</APIExample>

<br>

**Request Parameters**:

| Parameter | Description |  Type  | Required |
| :-------: | :---------: | :----: | :------: |
| `teamId`  |  Team name  | string |   true   |

<br>

**Response**: It deletes the requested team.

## API language clients

### Go

The following is an example of how to use the Go client library with the Public API for retrieving teams data. Replace the environment variable `PERSONAL_PAT` with your own personal access token, for example: `export PERSONAL_PAT=<your-personal-pat>`

```go
// Download the helper library using go get -u github.com/gitpod-io/gitpod/components/public-api/go
package main

import (
    "context"
    "fmt"
    "os"

    "github.com/bufbuild/connect-go"
    "github.com/gitpod-io/gitpod/components/public-api/go/client"
    v1 "github.com/gitpod-io/gitpod/components/public-api/go/experimental/v1"
)

func main() {
    token := "<YOUR_ACCESS_TOKEN>"

    gitpod, err := client.New(client.WithCredentials(token))
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to construct gitpod client %v", err)
        return
    }

    response, err := gitpod.Teams.ListTeams(context.Background(), connect.NewRequest(&v1.ListTeamsRequest{}))
    if err != nil {
        fmt.Fprintf(os.Stderr, "Failed to list teams %v", err)
        return
    }

    fmt.Fprintf(os.Stdout, "Retrieved teams %v", response.Msg.GetTeams())
}
```

### TypeScript

> 🚧 Under development
