---
author: nancy-chauhan, helenjoscott
date: Thursday, 28 April 2022 11:00:00 UTC
title: Set up a Spring Boot Remote Development Environment With JetBrains Gateway and Gitpod
slug: set-up-spring-boot-application-remotely-with-gitpod-and-jetBrains-gateway
excerpt: Setting up your first Spring project using JetBrains Gateway and Gitpod.
teaserImage: header.jpg
image: teaser.jpg
---

<script context="module">
  export const prerender = true;
</script>

**Announcement 🚀** : Today, Gitpod and Jetbrains join forces to solve the _'works on my machine'_ problem. Bringing JetBrains' deep product integration with Gitpod's remote workspaces to developers around the world.<br><br>
This gives developers the best of both worlds -

- Reproducible developer environments provisioned by Gitpod
- Favorite desktop IDE from Jetbrains - IntelliJ IDEA, PyCharm, GoLand, and PhpStorm
  <br>

You can read the full announcement on our blog [here](https://www.gitpod.io/blog/gitpod-jetbrains).

<hr/>

[JetBrains](https://www.jetbrains.com/) IDEs are one of the highly favored IDEs amongst developers. They provide excellent debugging and refactoring experience and built-in integrations with many tools such as docker, databases, web servers, etc. Through JetBrains Gateway, Gitpod delivers the choice of using JetBrains IDEs as a development environment for Gitpod workspaces. It will provide a familiar developer experience to long time users of JetBrains IDEs with the flexibility of cloud workspaces provided by Gitpod 🍊

This guide will teach you to set up a Spring project using JetBrains Gateway and Gitpod. Let's get started 🚀

# Setting up your first Spring project using JetBrains Gateway and Gitpod

## 1. Setup

Gitpod JetBrains IDE integration is powered with JetBrains Gateway, a compact desktop app to connect to remote workspaces without installing an IDE.

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/idea/remote-development-a.html#gateway)**

2. **Install Gitpod Plugin in JetBrains Gateway :**
   <br>
   Gitpod provides a plugin that you can install in JetBrains Gateway to connect to and manage Gitpod workspaces.

   - Open JetBrains Gateway `Preferences` from macOS application menu or `Settings` from `File` menu in Linux/Windows.

   - Navigate to `Plugins` and search for Gitpod in the Marketplace to find and install the **Gitpod Gateway** plugin.
   <figure>
   <img src="https://user-images.githubusercontent.com/37153406/165688357-d9e223d6-a08f-4cbc-8440-5f7d1d4f812a.png" alt="Installing Gitpod plugin in JetBrains Gateway">
   <figcaption style="text-align:center">Installing Gitpod Gateway plugin in JetBrains Gateway</figcaption>
   </figure>

3. **Update your preferences on the Gitpod dashboard :**
   <br>

   Select IntelliJ IDEA on the [Gitpod preferences](https://gitpod.io/preferences) page. It will set IntelliJ IDEA as your default desktop IDE for future workspaces. This will launch an IDE window connected to your Gitpod workspace. You can also choose to use other JetBrains IDEs such as GoLand, PyCharm or PhpStorm.
      <figure>
          <img src="https://user-images.githubusercontent.com/37153406/165688354-d4cc2eba-f7f6-4f2a-b54b-c545889a8131.png" alt="Gitpod Preferences">
          <figcaption style="text-align:center">Gitpod Preferences</figcaption>
      </figure>

4. **Connect to your workspace from JetBrains Gateway :**
   <br>

   Open JetBrains Gateway on your machine, and click `Connect to Gitpod` under the Gitpod section, connect to your workspace or create a new one from an existing repository.
      <figure>
          <img src="https://user-images.githubusercontent.com/37153406/165688355-7704fadb-c030-4a76-a387-510b91aaf87a.png" alt="Connect to Gitpod">
          <figcaption style="text-align:center">Connect to Gitpod</figcaption>
      </figure>

      <figure>
          <img src="https://user-images.githubusercontent.com/37153406/165688360-78cb72a1-d867-4298-b767-8d28d81de1be.png" alt="Create a new workspace">
          <figcaption style="text-align:center">Create a new workspace</figcaption>
      </figure>

If you want to read about the whole process in detail, you can refer to our online [documentation](https://www.gitpod.io/docs/references/ides-and-editors/intellij) 📖.

## 2. How to create a new Spring Boot project

You can create a new Gitpod workspace using JetBrains Gateway with our [Spring Boot template](https://github.com/gitpod-io/template-java-spring-boot-gradle). This template uses Java 11 and Gradle and is configured for creating Gitpod workspaces.

1.  Launch JetBrains Gateway and navigate to the Gitpod tab.
2.  Enter [`https://github.com/gitpod-io/template-java-spring-boot-gradle`](https://github.com/gitpod-io/template-java-spring-boot-gradle) as the repository URL and click on `New Workspace` to start a new Gitpod workspace.
    <figure>
        <img src="https://user-images.githubusercontent.com/37153406/165688318-b07d656c-a7aa-424d-8b77-7cd9807a6c0e.png" alt="Create Spring Boot project from our template">
        <figcaption style="text-align:center">Create Spring Boot project from our template</figcaption>
    </figure>

## 3. Run your project

1. Wait for the IDE to import the project and install the dependencies.
2. Run your project by clicking on the `Run` button. IntelliJ IDEA starts your Spring application in the ‘Run window’.
<figure>
    <img src="https://user-images.githubusercontent.com/37153406/165688347-390cf9a7-11a5-4d4f-8506-e1962c0ec699.png" alt="Run app inside IntelliJ IDE">
    <figcaption style="text-align:center">Run app inside IntelliJ IDE</figcaption>
</figure>

3. Once the Spring application starts, IntelliJ IDEA will prompt you for the availability of port 8080. Click on the port and select `Forward and open in browser` to launch the application in your web browser.
<figure>
    <img src="https://user-images.githubusercontent.com/37153406/165688350-fcc27164-8e8f-41a0-9fdc-7304f6e040c7.png" alt="Launch your app">
    <figcaption style="text-align:center">Launch your app 🚀</figcaption>
</figure>

4. You can use the IntelliJ IDEA integrated terminal to run shell commands on your Gitpod workspace as well.

Congratulations 🎉😄 <br>You have successfully set up your first Spring Boot project using Gitpod and JetBrains Gateway! <br>Further, if you want to learn more about running your existing codebase using Gitpod and JetBrains Gateway, you can follow the next section.

# Setting up your existing codebase using JetBrains Gateway and Gitpod

You can open an existing codebase using Gitpod and JetBrains Gateway. To get started with Gitpod, add a [`.gitpod.yml`](https://github.com/gitpod-io/template-java-spring-boot-gradle/blob/main/.gitpod.yml) file in the root directory of your existing codebase.
The `.gitpod.yml` file at the root of your project is where you tell Gitpod how to prepare & build your project, start development servers and configure continuous [prebuilds](https://www.gitpod.io/docs/configure/projects/prebuilds) for GitHub.
Hence, improving the developer experience on Gitpod ✨

## Customizing `.gitpod.yml`

Here is the `.gitpod.yml`, used in our template. It runs Gradle build when you open the workspace.

```yaml
tasks:
  - init: ./gradlew build
```

You can change the command to build your application or add more commands to run when your workspace starts. You can also add plugins to install in your IDEA instance automatically.

To learn more about customizing `.gitpod.yml` according to your requirements, refer to our [documentation](https://www.gitpod.io/docs/references/gitpod-yml).

# Working on Gitpod workspace using JetBrains Gateway

Using Gitpod on JetBrains Gateway feels like working on a project on a locally installed copy of IntelliJ IDEA. You can use the same shortcuts, powerful debugging tools, refactoring and plugins as you do on your local IDE without needing to set up your entire project on your machine.

This integration provides you with the best experience of using the cloud development environment of Gitpod and the comfort and familiarity of your JetBrains IDE. ✨
