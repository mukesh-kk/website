---
section: billing
title: Billing - Pay-as-you-go
---

<script context="module">
  export const prerender = true;
</script>

# Pay-as-you-go

> Pay-as-you-go is currently in [Early Access](/docs/help/public-roadmap/release-cycle). Please [contact us](/contact/support) to request an invitation, or [send feedback](https://github.com/gitpod-io/gitpod/issues/12636).

Pay-as-you-go is a flexible way for teams and individual users to pay for Gitpod.

Instead of billing for each user based on their plan, Gitpod can charge for usage based on how long workspaces run, and the resources consumed by different [workspace classes](/docs/configure/workspaces/workspace-classes). Metered usage also includes [prebuilds](/docs/configure/projects/prebuilds).

As an individual user, you receive a free usage allowance so that you can try Gitpod without a billing account. A personal billing account is required for additional usage beyond that.

Team billing accounts provide a way to pay for team members' usage when they run workspaces on team projects.

## Credits

Gitpod usage is measured in **credits**.

Larger [workspace classes](/docs/configure/workspaces/workspace-classes) use credits at a faster rate. E.g. Standard workspaces use 10 credits per hour, whereas Large workspaces use 20 credits per hour.

Your invoice will show the total amount of credits consumed in a billing period.

## Configure personal billing

The personal billing page is located in your [account settings](https://gitpod.io/account).

> 💡 If you do not see "Billing" in your settings, cancel your existing plan or team plan first.

The Gitpod Free plan comes with 500 free credits, renewed monthly. These credits can be used for all workspace classes. Unused credits expire at the end of each month.

Configuring a Personal billing plan in your user billing settings will increase your monthly credit allowance from 500 to 1000. Additional usage will be charged at the pay-as-you-go rate.

![Configure Personal billing](../../../static/images/docs/billing/configure-personal-billing.png)

You can add a payment method with credit card details in Euros or Dollars.

![Add payment details](../../../static/images/docs/billing/add-personal-payment-details.png)

Once billing has been configured, use the "Manage Plan" button to modify your payment details or cancel.

![Active Personal billing](../../../static/images/docs/billing/active-personal-billing.png)

If you are a member of a team with billing, you can select the team to pay for all your personal usage under "Default Billing Account".

![Select default billing account](../../../static/images/docs/billing/select-default-billing-account.png)

## Configure team billing

Team owners can configure pay-as-you-go in their team billing settings.

> 💡 You may need to cancel your existing Professional or Unleashed team-billing plan first.

![Configure Team Billing](../../../static/images/docs/billing/configure-team-billing.png)

Once team billing is configured, Gitpod will charge the team billing account for usage by team members, when they start workspaces on team projects, and for prebuild usage on team projects.

![Active Team billing](../../../static/images/docs/billing/active-team-billing.png)

## Configure a usage limit

The usage limit prevents workspaces from starting once the limit has been reached.

To change the usage limit, look for "Update limit" in the BALANCE section of your personal or team billing settings, after you have configured billing.

![Active Team billing](../../../static/images/docs/billing/update-usage-limit-2.png)

## View usage details

You can see the details of your personal usage when you click on "View Usage →" in your personal billing settings. Team owners can view usage details for their team.

![Active Team billing](../../../static/images/docs/billing/view-team-usage-details.png)

## Good to know

- Pay-as-you-go billing is an early-access (invitation only) feature.

- Metered usage includes prebuilds.

- The usage limit will prevent workspaces from starting, but it will not stop running workspaces.

- Usage for running workspaces which span two billing periods will not be double-charged.
