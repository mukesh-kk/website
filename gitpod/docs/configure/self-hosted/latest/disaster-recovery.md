---
section: self-hosted/latest
subsection: background
title: Disaster Recovery
---

<script context="module">
  export const prerender = true;
</script>

# Business Continuity and Disaster Recovery Considerations with Gitpod

> **Note:** There is a lot more to disaster recovery than we can cover here. This is just a high-level overview that speaks to how disaster recovery relates to Gitpod - it does not aim to be a complete guide to the topic.

### Disaster Recovery Principles

Thinking about disaster recovery with Gitpod is essential for business continuity and compliance reasons given how critical Gitpod is within your business’ practices: it is not only used to write code for new features but also e.g. to fix a security vulnerability.

When evaluating different disaster recovery strategies, it is important to keep in mind the business impact of different strategies. This impact is often defined by these interconnected metrics:

- **Recovery Time Objective (RTO):** this is the amount of time it takes to recover from a catastrophic failure. Applying this to Gitpod, this would be the time between a major outage that renders Gitpod unusable and the point at which Gitpod is restored and developers can develop again.
- **Recovery Point Objective (RPO):** This is the maximum amount of data loss (measured by time) during an outage that is acceptable to an organisation.
- **Acceptable Cost:** Different disaster recovery strategies come with different cost profiles. You need to know the acceptable cost level for your business to help choose the right strategy.

The accepted value of each key metric will depend on your business’ risk appetite and acceptable cost levels. These metrics can be used to better understand and categorise the different disaster recovery options available with Gitpod.

## Disaster Recovery Strategies

> **Note:** Whichever disaster recovery strategy you chose, make sure that you practice it end-to-end regularly to ensure that you can execute it successfully if ever it does become necessary.

Please refer to our guide around [backing up and restoring Gitpod](backup-restore) to learn more about which data Gitpod produces and how it can be backed up.

### Backup And Restore (Higher RTO)

With this strategy, you aim to replace a failed Gitpod instance or Kubernetes cluster by spinning up an entirely new cluster. You can find out more on how to do this in our [How to Backup and Restore Guide](backup-restore).

This strategy has the benefit of being cost-effective because you only operate a single cluster at a time. However, the time to spin up a new cluster and install Gitpod can be high increasing the time to recover. Thus, depending on your recovery time objective, it may be beneficial to evaluate the strategies mentioned below.

### Pilot Light (Medium RTO)

With this strategy, you keep a secondary Kubernetes cluster running that is identical to the one used in production - but in a separate data center and scaled down to the minimum set of nodes to save cost. This means that you do not need to first spin up a cluster in case of disaster but can rather use the one already running to install Gitpod onto (using the same external dependencies and thus data as your production cluster) and then shift traffic to. This can significantly reduce your time to recovery but comes with the cost of running an additional cluster.
