---
author: axonasif, pawlean, nancy-chauhan
date: Wednesday, 30 Jun 2022 02:00:00 UTC
excerpt: A detailed guide for setting up your Android phone for optimal development experience with Gitpod
slug: getting-started-with-gitpod-in-android
teaserImage: teaser.png
image: thumbnail.png
title: Getting started with Gitpod in Android
---

<script context="module">
  export const prerender = true;
</script>

Yes! You can learn to code and build software with Gitpod on Android! Gitpod is a complete dev environment running in the cloud, which turns any android phone into a powerful dev machine. I have been developing software on my phone using Gitpod for a long time! It is powerful, and I believe with Gitpod, anyone can learn to code and build software without any hurdles.

Gitpod changed my life and enabled me to continue my journey into software development. I have talked more about it [here](../blog/software-development-from-my-android-phone-at-datacenter-speeds). In this guide, I have discussed how Gitpod is fully usable from an Android phone. I will be sharing how I set up Gitpod on my Android phone. If you're curious, follow along 🚀

# Browser

To get started, all you need is a browser. I use the [Kiwi](https://kiwibrowser.com/) browser on Android. It brings you almost a full-blown desktop-like chromium experience but on mobile! That means you get chrome-devtools, extensions support, keyboard shortcuts and many more.

##### Important notes about using Gitpod on Kiwi:

- There is a chromium [bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1202651) with mouse cursor hover. If you face this bug, you must toggle off your installed accessibility services while using Kiwi.
- I recommend toggling off “**Prefer native applications**” on Kiwi from its **Settings > Accessibility**.
<figure>
<video preload="metadata" controls muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Toggle off auto native app opening" src="/images/guides/getting-started-with-gitpod-in-android/kiwi_settings.mp4"></video>
</figure>

![conversation 1](../../../../static/images/guides/getting-started-with-gitpod-in-android/convo.svg "kumquat asks")

- Some shortcuts like **Windows/Meta + Key**, **Control + Space** and etc. will not work on Gitpod as Android captures them for its internal shortcuts. Unfortunately, you can not disable or remap them easily. To workaround, you will have to remap some of your conflicting IDE shortcuts from the [VS Code Browser](https://www.gitpod.io/docs/references/ides-and-editors/vscode-browser) settings.

##### Kiwi tips:

- Try pressing “**Windows/Meta key**” + “**/**” on the Kiwi browser to see all browser and Android-system shortcuts.
- My favourite shortcuts are Alt + Tab for quick application switching and Ctrl + T for quickly creating a new Kiwi tab.
- Install the [Gitpod extension](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) on Kiwi to make your life easier.
- I also use the [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) extension on Kiwi for swiftly navigating through websites without using my mouse.

# Hardware keyboard and mouse

Next, you need a way to control your phone as you would with a PC. There are two easy things you can do:

- You can get a Bluetooth keyboard and mouse combo (this is the most convenient choice)
- Or you can get a USB hub for your Android device and use a wired keyboard and mouse (this is the most responsive)

I've gone through both routes and ended up sticking with Bluetooth devices for convenience!

# Display

As phone displays are so small, it can get tricky coding from such a small screen. There's no easy solution for this problem if you've got some entry-level or mid-range Android phone like me. Nowadays, even entry-level Android devices are powerful enough to serve you well and run a complete Linux GUI environment with virtually no lag unless you're a hardcore mobile gamer.

**Note:** If you got a tablet or a high-end Android phone with USB-C 3.0, you probably don't need to care about the particular issue I will discuss in detail. You can skip it!

Cheap phones won't likely come with USB-C 3.0, so you won't be able to get direct VIDEO output from your phone to an external monitor/TV. Some third-party products utilize ADB, and a mini-CPU on the HDMI end to stream your Android display over a cable.

![external monitor](../../../../static/images/guides/getting-started-with-gitpod-in-android/external_monitor.jpg "external monitor setup with android")

In my case, I use a Chinese HDMI adapter for my microUSB phone to connect with this external screen. You can take "[Renkchip](https://www.amazon.com/dp/B08DLJCV55/)" for reference if you want one too. But, you have to consider a few things first:

- If you're planning to buy it to connect with a TV, ensure that its input lag isn't more than 15ms. Otherwise, your experience will be terrible combined with the adapter input lag. You can use the [incredible Rtings.com TV input lag list](https://www.rtings.com/tv/tests/inputs/input-lag) for reference.
- Avoid unbranded adapters if you buy online since most of those use a weak CPU for processing the VIDEO data on the HDMI end.
  ![conversation 2](../../../../static/images/guides/getting-started-with-gitpod-in-android/convo2.svg "kumquat asks")

We can also utilize some software-based things; these can be helpful whether you're using an external screen or not. For instance:

- Press the F11 key on a Gitpod workspace to make VS CODE full screen on the Kiwi browser.

- Increase the **Smallest/Minimal Weight** on your phone's [**Developer options**](https://developer.android.com/studio/debug/dev-options#enable). It can be also referred as [DPI](https://en.wikipedia.org/wiki/Dots_per_inch). It will make things take less space on your tiny screen when the value is increased. **Please remember that it can brick some devices when increased too much, so don't go too far.**
<figure>
<video preload="metadata" controls muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="modify DPI without root" src="/images/guides/getting-started-with-gitpod-in-android/modify_dpi.mp4"></video>
</figure>

# Extra Tips & tricks

- You can use an app called [Rotation Control](https://play.google.com/store/apps/details?id=org.crape.rotationcontrol) to force landscape/auto-rotate mode for every app on Android (including your Home launcher!)
- I'm using a $2 phone stand, it's called "Retractable L7 Phone Stand", sharing the name for reference in case you want to find something similar in your local market or online. Or you can put your phone against a book as well 😆

Congratulations 🎉. Now you have set up the browser and display and connected the hardware keyboard and mouse with your Android phone. You can now code, build and learn seamlessly using Gitpod ⚡️. To get started, you can refer to the [following documentation](https://www.gitpod.io/docs/introduction/getting-started).

If you have more questions, drop by our community Discord server. We have the [#mobile-and-tablets](https://discord.com/channels/816244985187008514/890901203624534026) channel where fellow mobile-dev enthusiasts hang out!
