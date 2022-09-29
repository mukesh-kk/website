---
section: self-hosted/latest
subsection: operational-guides
title: Monitoring Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

> This guide aims at helping you set up basic monitoring of your Gitpod instance. In the end, you will have a continuous, high-level view of the health of your installation that you can monitor and alert on to respond to any issues quicker.

# Monitoring

Once you have Gitpod self-hosted up and running, the next step is making sure it _continues_ to run as expected. This guide shows you how to set up a monitoring solution that consumes the data that Gitpod produces in order to help you understand the overall state of your Gitpod installation.

> **Note** All metrics shown on this page are experimental and might change in the future.

## Metrics collection

Several components of Gitpod expose metrics using the [Prometheus exposition format](https://prometheus.io/docs/concepts/data_model/), but for this guide, we'll focus on the most important one that makes sure that Workspaces are starting and running reasonably.

Gitpod is all about Workspaces, so the information that you want to keep an eye on is:

- How many workspaces are currently running.
- Workspaces are starting.
- Workspaces are starting in a reasonable time frame.
- Running workspaces don't stop unexpectedly.

`ws-manager` is the component responsible for measuring and exposing such data, so you want to make sure that your Prometheus instance is scraping metrics from this specific component. Metrics are exposed through port `9500`, at the `/metrics` endpoint.

We recommend using the [Prometheus-Operator](https://github.com/prometheus-operator/prometheus-operator) and the [ServiceMonitor](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec) or [PodMonitor](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#podmonitorspec) CRDs to simplify the configuration surface.

## Dashboards and Alerts

To have all useful data available and presented in a friendly way, it is recommend building [Grafana Dashboards](https://grafana.com/grafana/dashboards/) with the most important metrics (the ones shown in this guide). If you prefer, you can [import](https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard) [one of our examples](https://github.com/gitpod-io/gitpod/blob/main/operations/observability/mixins/self-hosted/dashboards/examples/overview.json) as a baseline to your own dashboards.

Alerting can be done with [Prometheus itself](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). If you are using the Prometheus-Operator as we recommended, you can also use the [PrometheusRule](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#prometheusrulespec) CRD to simplify alerting configuration. The [Alertmanager](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#alertmanagerspec) CRD can be used to configure alert routing to different popular platform such as [PagerDuty](https://www.pagerduty.com/) or [Slack](https://slack.com/).

## What you should keep an eye on

### How many workspaces are currently running

To discover how many workspaces are currently running, use the [PromQL query](https://prometheus.io/docs/prometheus/latest/querying/basics/) below:

```promql
sum(gitpod_ws_manager_workspace_phase_total{phase="RUNNING"}) by (type)
```

`gitpod_ws_manager_workspace_phase_total` is a [Gauge](https://prometheus.io/docs/concepts/metric_types/#gauge). Although not suitable for alerting (because the amount of workspaces say little about your installation's health), with this query, you're able to tell how many workspaces, prebuilds and imagebuilds are running. This can be good information to tell how saturated your Gitpod instance is.

### Workspaces are starting

The metric for this one is very similar to the one mentioned above, we're just changing the phase to `PENDING` instead of `RUNNING`.

```promql
sum(gitpod_ws_manager_workspace_phase_total{phase="PENDING"}) by (type)
```

This metric is a good candidate for alerting. If this number is steadily going up, it means that Workspaces are having a hard time getting to the `RUNNING` state, which is a good indicator of bad user experience. A good threshold changes from organization to organization, it is recommended to periodically review this alert's threshold as the usage of Gitpod increases or decreases.

### Workspaces are starting in a reasonable time frame

To ensure a good user experience, you'll also want to make sure that Workspaces are starting swiftly! [Histograms](https://prometheus.io/docs/concepts/metric_types/#histogram) are used to capture this information. With histograms, it's possible to measure different percentiles and capture a high-level overview and outliers at the same time.

Example queries are shown below:

```promql
# 95th percentile
histogram_quantile(0.95,
    sum(rate(gitpod_ws_manager_workspace_startup_seconds_bucket{type="REGULAR"}[5m])) by (le)
)

# 50th percentile
histogram_quantile(0.5,
    sum(rate(gitpod_ws_manager_workspace_startup_seconds_bucket{type="REGULAR"}[5m])) by (le)
)
```

Sluggishness, depending on how bad it is, can be even worst than a fast failure. For that reason, alerting on workspaces taking too long to start is a good idea. It is suggested to collect feedback from users of your Gitpod installation to decide the correct thresholds for the alert on this metric.

### Running workspaces don't stop unexpectedly

Last but not less important, you want to make sure that running workspaces do not fail and stop abruptly. `ws-manager` exposes a [counter](https://prometheus.io/docs/concepts/metric_types/#counter) that counts all workspace failures, making it possible to measure workspace failure rate (i.e. how many workspaces are failing per second).

The query is shown below:

```promql
sum(rate(gitpod_ws_manager_workspace_stops_total{reason="failed"}[5m])) by (type)
```

The goal is that this metric stays as close to 0 as possible. If it starts to increase it means something is going wrong! Alerting can be set for high error rates, but just like the ones above the threshold will come from experience operating Gitpod. It is suggested to periodically review the threshold as your installation increases or decreases usage.

## Troubleshooting

Please refer to the [troubleshooting](https://www.gitpod.io/docs/configure/self-hosted/latest/troubleshooting) docs.
