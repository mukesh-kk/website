# 4. Feature Flag Implementation using ConfigCat

Date: 2023-05-18

## Status

2023-05-18 accepted

## Context

In our application, we have a requirement to implement feature flags to enable/disable certain features dynamically without redeploying the entire application. We have developed a TypeScript-based service that can be called from our Svelte components to retrieve the status of feature flags. Additionally, we want to ensure consistency in the user experience by passing the `ajs_anonymous_id` as the ConfigCat user ID across all pages of the website.

## Decision

We have decided to implement the feature flag functionality using a TypeScript service and pass the `ajs_anonymous_id` as the ConfigCat user ID to maintain consistency.

## Consequences

### Benefits

- Dynamic feature toggling: By implementing feature flags, we can enable/disable specific features at runtime without redeploying the entire application. This allows for greater flexibility and the ability to experiment with different feature combinations.
- TypeScript-based service: Utilizing TypeScript for the feature flag service ensures type safety and improves code maintainability.
- Svelte component integration: Integrating the service with our Svelte components allows us to easily control the visibility and behavior of features based on their respective flags.
- Consistent user experience: Passing the `ajs_anonymous_id` as the ConfigCat user ID ensures that the user's experience remains consistent across all pages of the website, regardless of the feature flag states.

### Drawbacks

- Complexity: Implementing feature flags introduces additional complexity to the codebase, as we need to handle the logic of enabling/disabling features based on the flag states.
- Maintenance: Regular maintenance is required to update feature flags and handle any potential conflicts or issues that may arise.
- Increased dependencies: Integrating ConfigCat and relying on the `ajs_anonymous_id` introduces a dependency on external services. Any downtime or issues with these services may impact the feature flag functionality and user experience.

## Considered Alternatives

### 1. Custom Flag Implementation

We could have implemented a custom feature flag solution, using our own logic and storage mechanism to determine the state of each feature flag. However, this would require more development effort and might lack some advanced features offered by dedicated feature flag management tools.

### 2. Different User ID Approach

Instead of using the `ajs_anonymous_id`, we could have used another identifier or mechanism to maintain consistency across website pages. However, using the same ID allows us to leverage ConfigCat's built-in user-targeting capabilities and simplify the integration process.

## Related Information

[ConfigCat](https://configcat.com/): A feature flag and configuration management service.
