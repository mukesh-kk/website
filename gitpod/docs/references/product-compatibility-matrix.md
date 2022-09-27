---
section: references
title: Gitpod Compatibility Matrix
---

<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import CompatibilityMatrix from '$lib/components/docs/compatibility-matrix.svelte';

</script>

# Gitpod Compatibility Matrix

This page shows you what components and services Gitpod is and is not compatible with. It is aimed at both individual developers that use Gitpod as well as admins that install and maintain a [Gitpod Self-Hosted](../self-hosted/latest) instance. You can filter the table to show only what is relevant to you.

> **Note:** It is required to have at least one of each category. SaaS users can ignore the self-hosted specific categories (see filter)

<CompatibilityMatrix />
