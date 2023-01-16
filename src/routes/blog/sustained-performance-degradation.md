---
author: kylos101, csweichel, lucasvaltl, Furisto
date: Thursday, 5 May 2022 11:00:00 UTC
excerpt: Gitpod experienced a series of incidents between April 11th and 22nd, which led to workspace performance degradation in all regions, and in some cases, users were unable to start workspaces and experienced data loss.
image: teaser.png
slug: sustained-performance-degradation
subtitle: contributing factors and how we'll do better
teaserImage: teaser.png
title: Sustained workspace performance degradation for April 11-21
---

<script context="module">
  export const prerender = true;
</script>

Gitpod experienced a series of [incidents](https://www.gitpodstatus.com/) [[1](https://www.gitpodstatus.com/incidents/jzgzzk008hqp), [2](https://www.gitpodstatus.com/incidents/12tvkhs2gyrg), [3](https://www.gitpodstatus.com/incidents/2jymw3f0q9zb), [4](https://www.gitpodstatus.com/incidents/qrr1pw0gcvdy)] between April 11th and 22nd, which led to workspace performance degradation in all regions, and in some cases, users were unable to start workspaces and experienced data loss.

## Summary

Gitpod workspaces are meant to “feel” like your own machine, except in the cloud. Performance and reliability of workspaces are hallmark features of Gitpod. And, just like your own machine, the pain is very real when workspaces do not perform as you need or expect.

On April 9th at _7:30_ UTC (all times will be in _24 hour-format UTC_), we finished shipping a new generation of workspace clusters (`ws39`). This included a variety of features to reduce workspace startup times, as well as make more CPU accessible to users at runtime.

However, between April 11th and 22nd, Gitpod experienced a series of incidents resulting in sustained performance degradation for workspaces. Additionally, some users were unable to start workspaces at times and experienced data loss.

In this post, we’ll cover:

- What happened: a complete timeline.
- Contributing factors: the cause of the outage.
- How we’ll do better

## What happened: a complete timeline

### April 8th

**_20:08 UTC_** - `ws39` is released for all regional clusters, excluding XL clusters. This included a variety of changes to significantly reduce workspace startup times, and provided a new generation of CPUs with better performance characteristics.

### April 9th

**_17:45 UTC_** - The release for `ws39` is extended to XL clusters too, concluding the release. All traffic at this point will use `ws39` to start workspaces.

### April 11th

**_13:17 UTC_** - We received reports from customers and Gitpodders at _13:17_ that workspaces were intermittently becoming unresponsive. We opened [an incident](https://www.gitpodstatus.com/incidents/jzgzzk008hqp) in Slack via our incident.io integration and began investigating.

**_13:58 UTC_** - When we inspected the CPU usage for nodes and pods, it was normal, nothing was maxed out, and signs did not indicate our CPU limiting had failed or that there were noisy neighbors. At _13:58_, we realized workspaces were getting IO bound, rather than CPU bound.

At the time, we lacked IO limiting capabilities, so we decided to shift traffic for workspace starts back to our prior set of clusters (`ws38`), which did not have this performance issue. This was completed at _15:37_.

**_21:29 UTC_** - While stable on the prior generation (`ws38`), we planned short and long term action items to move forward with the release. For the short term: build a new set of clusters (`ws39a`) running faster machine types ([t2d→c2d](https://cloud.google.com/compute/docs/machine-types#recommendations_for_machine_types)) with quicker disks (local SSDs). For the long term, prepare a new VM image and environment so that we can design a IO limiting feature.

In other words, short term, we decided to alleviate the IO bandwidth issues by using faster disks. The reasoning was that we would avoid maxing out the read and write capabilities of disks, hence avoid workspaces being IO bound. We planned to run like this for 2-3 days, while researching, building, and testing an IO limiting solution.

The deploy of `ws39a` did not go smoothly.

- The new `c2d` machine type was not available in all zones that we typically use, so we had to deploy to a new region. However, the region lacked sufficient quota for CPU and storage, and when we tried to increase, GCP’s quota approval process was too slow, albeit within SLA.
- Once we were able to deploy to GCP, we were unexpectedly rate limited by Let’s Encrypt! As a result, we could not provision TLS certificates for new sub-domains, which is why some clusters had old sub-domains. Why? A customer [requested TLS certs](https://letsencrypt.org/docs/challenge-types/#http-01-challenge), exhausting the limit for gitpod.io! [We eventually resolved the rate limiting issue](https://github.com/gitpod-io/gitpod/pull/9358). Additionally, we requested a limit increase from Let’s Encrypt.

The traffic shift from `ws38` to `ws39a` was completed by _21:29_, and [the incident was closed](https://www.gitpodstatus.com/incidents/jzgzzk008hqp). Additionally, we held onto `ws38`, just in-case we have to fall-back to it, again.

### April 12th

**_11:53 UTC_** - Customers and Gitpodders reported that workspaces were experiencing performance issues. After troubleshooting, we [created a new incident](https://www.gitpodstatus.com/incidents/2jymw3f0q9zb), and confirmed workspaces were becoming IO bound, again.

At this point, it was apparent we needed an IO limiting solution for the new workspace cluster release. In the meantime, we had successfully [built](https://github.com/gitpod-io/gitpod/pull/9271) a [cgroups-based IO limiter](https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html#limits) for Gitpod, and it worked well in our dev/test environment!

Unfortunately, the new IO limiter did not behave similarly in production, and crashed our `ws-eu39xl` cluster. The XL cluster contained workspaces [for unleashed customers](https://www.gitpod.io/pricing) and Gitpodders, who both experienced data loss. The ws-daemon rollout on those clusters broke the CPU limiter which lead to the nodes becoming unresponsive. All of the cores for each node became consumed, the services on the those nodes ceased to function, and we couldn’t connect to them to recover via `ssh` or `kubectl`.

**_13:49 UTC_** - At roughly _13:49_, we shifted EU XL traffic back to `ws-eu38xl`. We did not realize, however, until _14:21_ that it was not receiving traffic! We promptly opened another incident because EU XL users were [unable to start workspaces.](https://www.gitpodstatus.com/incidents/12tvkhs2gyrg)

In the meantime, a breaking API change had been deployed to our control plane, rendering the `ws38` clusters incompatible. At _15:28_, we temporarily routed traffic to the regional EU cluster, to start workspaces again. All the while, we built a new XL cluster, (`ws-eu39bxl`) to replace the one we burned down (`ws-eu39xl`).

At this time, we had too many active clusters, and had to increase quotas (approval was delayed) to continue to meet demand and scale. This additional incident and the replacement XL cluster were resolved by _17:09_.

**_18:32 UTC_** - We decided to prepare yet another set of clusters to accomplish two things:

1. Rollback from the `c2d` to `n2d` machine type, which is what `ws38` had been using.
2. Share a new set of clusters with the EU team to develop a fix for the IO limiting.

### April 13th

**_02:00 UTC_** - While building the next set of clusters we bumped into a blocker: a [Git CVE](https://github.blog/2022-04-12-git-security-vulnerability-announced/) had been discovered and fixed, requiring a [configuration change](https://git-scm.com/docs/git-config/2.35.2#Documentation/git-config.txt-safedirectory). Without this change, our tests were failing and we could not continue work on the IO limiter. [One PR](https://github.com/gitpod-io/gitpod/pull/9279) later we could focus on the IO bandwidth issue again.

**_07:30 UTC_** - The APAC team handed off the new set of clusters to the EU team at 07:30. The EU team at this point pursued a couple things:

- Clean-up workspaces stuck in a stopping state, so that users could start them again.
- Fix the CPU limiter and build the IO limiter, to help return Gitpod to reliable performance.

While improving limiters, a problem was found with [workspace networking](https://github.com/gitpod-io/gitpod/pull/9294). Networking had been improved as part of the April 8th release to grant faster network speeds and more CPU to users. However, it was also causing workspaces to be sluggish in production! This was hard to identify and resolve [[1](https://github.com/gitpod-io/gitpod/pull/9270)] because of a lack in parity between our development and production environments (production has IP forwarding disabled, development has it enabled).

**_16:00 UTC_** - As a next step, at _16:00_ we decided to clean-up unneeded clusters. The clean-up for old clusters helped us avoid GCP quota limits, reduce cost, and made it easier to manage the active clusters. While monitoring operations overall, it was important for us to inspect customer workloads that were still getting IO bound to learn how we need to improve our own monitoring capabilities.

### April 14th

**_02:00 UTC_** - We started the release of `ws40`. It included nodes with `1TB` boot disks, which is what we had prior to the April 8th release. The intent for this new generation was the same as the previous day: restore reliable performance. In this case, we were pursuing two results:

1. Get more IO bandwidth from the disks, to have a larger pool of IO for workspaces to consume
2. Have a working IO limiter, to fairly distribute disk resources

**_10:10 UTC_** - In a night-shift we had rewritten the IO limiter, deployed it and began shifting traffic to `ws40`. At _13:12_ we observed that the IO limiter was still not working as expected. However, we decided to continue with the shift of traffic to `ws40` because it was making more IO available overall to our users.

**_16:31 UTC_** - The traffic shift was at 50% at _16:31_, and 100% by _17:49_. We continued to monitor for a couple hours after the traffic shift, and observed that there were in fact still spikes, where nodes were IO saturated, meaning some workspaces would still get IO bound. Regardless, we finally closed [the incident](https://www.gitpodstatus.com/incidents/2jymw3f0q9zb), because we believed the additional IO bandwidth would resolve the issue.

### April 17th

**_5:18 UTC_** - We noticed increased CPU load on the workspace nodes and triggered an internal incident. In `ws40` our defence mechanism against crypto-currency miners was broken. This lead to a proliferation of crypto-mining, rendering many of the workspace nodes uninhabitable. We proceeded to manually inspect node workloads using our monitoring systems, identified workspaces which consumed excessive CPU time and removed them from the system. Our internal rate limits prevented these workloads from spreading to new nodes.

**_8:47 UTC_** - Our investigation of the users who had caused this excessive CPU use revealed that the vast majority of them were auto-generated GitHub accounts, produced for the sole purpose of gaining compute from Gitpod workspaces.

### April 18th

**_12:36 UTC_** - We saw the same increase in CPU load on workspace clusters as the day before - and responded in kind. Through manual combing through the nodes (in combination with our miner detection system), we identified fraudulent users and blocked their use of Gitpod.

**_19:38 UTC_** - Throughout the day we had been fending off illicit use of Gitpod’s resources. At the same time part of the team attempted to fix the issue with our automatic crypto-miner defenses.

**_23:35 UTC_** - We have found the main issue with our dynamic CPU limiting mechanism.

Essentially, our CPU limiting wasn’t working correctly, more workspaces were being given CPU time than we intended.

The solution was to rollback a change to our `ws-daemon` which was not present in our `ws38` generation of clusters, making CPU limiting stable again.

### April 19th

**_03:31 UTC_** - `ws34` is ready for rollout (we had to use an old name due to the rate limiting issue with Let’s Encrypt, which was preventing us from registering new TLS certificates). Those clusters carry the fix for the recent CPU limiting issues which should curtail crypto-mining. Not wanting to risk doing more harm than good we start with a conservative roll-out scheme. This deployment also blocks ACME HTTP requests to workspace ports, to prevent running into LetsEncrypt rate limits again.

**_10:59 UTC_** - We have not observed adverse effects from the `ws34` changes, and continue to shift 50% of the traffic `ws34`.

**_16:34 UTC_** - Throughout the day we have observed that the `ws34` change is effective and provides an improvement in service. By this time the rollout is complete and we retire the `ws40` clusters.

### April 20th

**_13:45 UTC_** - We create [this incident](https://www.gitpodstatus.com/incidents/qrr1pw0gcvdy), as multiple customers were still having performance issues, resulting in unreliable workspaces for workloads that were behaving normally prior to the April 8th release.

As a first step, we decide to prepare a rollback for the breaking API change, just in case we need to use `ws38`, which was the original cluster prior to the April 8th release.

Next we socialized alternatives for implementing IO limiting. It was determined through many experiments that the best path forward is to use [this library to limit IO](https://github.com/intel/goresctrl/blob/main/doc/blockio.md).

**_20:49 UTC_** - We get IO limits partially working! Our nodes have a few disks, and the limiting was having trouble detecting the proper devices to limit. In other words, we wanted to make sure we can fairly marshal workspace IO for `/workspace` and `/` .

**_23:48 UTC_** - After many experiments,, via `ws41xl`, we’ve produced a cluster that fairly distributes disk IO between workspaces. The initial shift of traffic was conservative at first, just 25%, so that we can check specifically with the customers who were reporting that workspaces were continuing to suffer from being IO bound.

### April 21th

**_10:58 UTC_** - IO behavior in the `ws41xl` cluster had shown significant improvement over their predecessors. Additionally we had confirmation from impacted customers that workspaces started on the new cluster felt normal again. With that news, we shifted traffic to 50%.

**_14:00 UTC_** - Next, we started building the standard, regional clusters for `ws41`, and started traffic shift for them at 14:00. We opted to be conservative here, because the nodes in these clusters run twice the density as our XL clusters. Seeing as the IO limiting was new, we wanted to make sure that we applied load gradually, so that we could monitor and react, if needed.

**_18:46 UTC_** - Confident that the IO limiting worked as expected, we set the XL clusters to 100%, and standard regional clusters to 50%. The standard regional cluster were pushed to 75% at _22:00_, and to 100% by April 22nd _02:00_.

## Contributing factors: the cause of the outage

### Beforehand

The April 8th changeset lacked sufficient risk assessment and was released too quickly.

Prior to the release, test results should have informed us that the release was a no-go. Essentially acting as a firewall. We continue to invest in our test automation to help prevent similar incidents in the future. [[1](https://github.com/gitpod-io/gitpod/issues/8799)][[2](https://github.com/gitpod-io/gitpod/issues/7934)]

Execution of the release, especially due to its size and proximity to the prior release (3.5 weeks), was too aggressive. `ws38` was replaced by `ws39` starting on April 8th and finished by April 9th. For the future, the time interval used to control how quickly we shift percentages of traffic to new clusters will vary. Larger releases will have more time in-between traffic percentage shifts to “limit the blast radius”.

### Initial incident

The following changes from the April 8th release caused the first incident.

We split a 1TB disk to many smaller RAID0 disks. This was done to isolate IO for image pulls and workspaces from one another, as well as increase performance. However, we later realized, the IOps a disk can achieve decrease with disk size.

An enhancement to our CPU limiting feature included a bug which reduced its corresponding effectiveness. This allowed for too many noisy neighbors. Further, the effect a noisy neighbor could have was magnified by workspaces generally having more CPU available. This was due to a couple factors:

- We upgraded to faster machine types, for the same cost, to provide better multi-core performance.
- [We removed slirp4netns from workspace networking](https://www.gitpod.io/blog/workspace-networking#wait-whats-slirp4netns-and-why-do-we-need-this), freeing up [user-space](https://en.wikipedia.org/wiki/User_space_and_kernel_space) for customer workloads.

Improvements to workspace networking unfortunately introduced a couple tricky defects. [[1](https://github.com/gitpod-io/gitpod/pull/9294)][[2](https://github.com/gitpod-io/gitpod/pull/9356)] These caused sluggish performance for network processes, including containerized workloads.

To summarize: degraded workspace performance was caused by a myriad of factors that were interconnected and reinforced each other. disk IO was slower than anticipated, and CPU was more accessible while not governed as expected. This was further compounded by a lack of ability to limit disk IO and latency in workspace networking.

### Subsequent incidents

It would have been best if we had committed to rolling back on April 11th. However, we did not, and continued to build and ship fixes which resulted in pain for customers and Gitpodders.

Customers were exposed to degraded performance for a period of time longer than necessary. Some even experienced data loss, both of which are extremely frustrating. Gitpodders accumulated stress over many days while troubleshooting the series of incidents.

The best we can do is acknowledge our mistakes, reflect on them, and plan related improvements. Let’s talk about how.

## How we'll do better

We have seen a lot of things fail during this series of incidents, and take away a host of areas where we will improve. Most changes are organisational or touch on process, and roughly fall into three categories: preventing incidents, reacting quicker, and improving communication.

We continuously strive to reduce the “batch size” and increase deployment frequency. With `ws39` we failed to follow up on this intent. For future workspace cluster rollouts, we shall introduce a risk assessment stage (which we aim to automate), which’ll govern changeset size and rollout speed (rate at which we make a change available to users).

In addition, we’ve seen cross-team dependencies limiting our ability to roll back. We continue to reduce the impact teams have on each other, and establish additional review criteria to uncover backwards incompatible changes prior to merging pull requests (PRs). Such PRs will then need to be split up to avoid scenarios where we struggle to roll back a deployment.

Coupled with an improved capability to roll back changes, we have updated our procedures to recommend rollback as a primary means of mitigation. Discussions are underway how such a process could be automated.

During the incident we failed to hold up one of our core values: transparency helps build a community of trust. Our external communication was not up to our own standards. Although we provided [status page updates](https://www.gitpodstatus.com/), they were not frequent enough. Further the workspace service on that page did not properly indicate that we were down (with an orange or red color). This has since [been corrected](https://www.gitpodstatus.com/), and our playbooks updated accordingly.

Our internal communication was spread across too many channels. This made it difficult at times to effectively coordinate. The team fixed this by consolidating communication in a single Slack channel and Google Meet starting April 20th. This made reviewing the history easier and gave us a better overview of all things in flight. We have updated our incident procedures accordingly.

Lastly, we have redesigned our on-call process. Starting May 9th, 10% of our engineering staff will be part of the on-call rotation at any given time. We will use this engineering time to improve our observability, alerting and overall stability of the system. The mission of the folks who are on-call (other than monitoring and responding to abnormal events) is to make next week’s on-call shift less eventful than last week.

## Conclusion

We’ve shared a detailed timeline for the events leading up to and during the performance degradation. Our intent is for you to understand what, was happening when, and why certain outcomes manifested. Frankly, we want to earn back your trust, and being open about what happened is paramount. It’s also in our DNA - we build in the open.

The contributing factors leading to sustained performance degradation were partially preventable. However, hindsight is 20/20 and _[failure free operations require experience with failure.](https://how.complexsystems.fail/#18)_

Moving forward, we are actively experimenting with process changes and automation to help mitigate similar issues in the future. This will help us gain the feedback and leverage we need to confidently assess risk, while also allowing teams to be independent and ship continuously.

Want to help build Gitpod? Checkout our [careers](/careers).
