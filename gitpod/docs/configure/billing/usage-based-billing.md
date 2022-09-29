---
section: billing
title: Usage-based billing
---

<script context="module">
  export const prerender = true;
</script>

# Usage-based billing

> {title} is currently in [Early Access](/docs/help/public-roadmap/release-cycle). Please [contact us](/contact/support) to request access, or [send feedback](https://github.com/gitpod-io/gitpod/issues/12636).

Usage-based billing provides a flexible way for teams and individual users to pay for Gitpod.

Instead of pre-paying for yourself or for each team member every month, Gitpod will charge for usage based on how long each workspace runs, and its allocated [resources](/docs/configure/workspaces/workspace-classes).

With usage-based billing you will be charged only for the usage incurred during a billing period.

## Credits

Gitpod usage is measured in **credits**. Your invoice will show the total amount of credits consumed in a billing period.

Larger [workspace classes](/docs/configure/workspaces/workspace-classes) will use credits at a faster rate than smaller workspace classes. E.g. `Standard` workspaces use `10 credits per hour`, whereas `Large` workspaces use `20 credits per hour`.

Users or teams who have been granted free credits, or who have purchased credits in advance, will use those credits first, and only see charges for additional usage above that.

## Configure team billing

Team owners can configure usage-based billing in their team settings.

![Configure Team billing](../../../static/images/docs/billing/configure-team-billing.png)

You can add a payment method with credit card details in Euros or Dollars.

![Add payment details](../../../static/images/docs/billing/add-payment-details.png)

Once billing has been configured, all team members' usage will be billed to the team.

![Active Team billing](../../../static/images/docs/billing/active-team-billing.png)

## Configure a usage limit

Configuring a usage limit, in total credits, will prevent users from starting workspaces once the limit has been reached.

![Active Team billing](../../../static/images/docs/billing/update-usage-limit.png)

## View usage details

Team owners can view usage details for their team for the current (unbilled) billing period, and for previous billing periods.

![Active Team billing](../../../static/images/docs/billing/view-team-usage-details.png)

## Good to know

- Usage-based billing is an early-access (invitation only) feature.

- You will need to cancel any existing (prepaid) team-plan before configuring usage-based billing.

- Metered usage includes prebuilds.

- The usage limit will prevent workspaces from starting, but it will not stop running workspaces.

- Usage for running workspaces which span two billing periods will not be double-charged.
