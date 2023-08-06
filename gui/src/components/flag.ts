import { FliptApiClient } from '@flipt-io/flipt';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue'; // Import ref from Vue for using reactive data

// Create a new FliptApiClient instance with the specified environment and authentication credentials
export const client = new FliptApiClient({
  environment: "http://localhost:8080",
  auth: {
    credentials: {
      username: "YOUR_USERNAME",
      password: "YOUR_PASSWORD",
    },
  },
});

// useFlagEnabled function to be used in the Vue component
export function useFlagEnabled(key) {
  const isTestFlagEnabled = ref(false);

  (async () => {
    try {
      const response = await client.evaluation.variant({
        namespaceKey: "test",
        flagKey: key || "abc123", // If no flagKey is provided, use "abc123" as the default key
        entityId: uuidv4(), // Generate a random UUID as the entity ID
        context: {}, // Empty context object (additional context data can be passed here)
      });
      isTestFlagEnabled.value = response.match;
    } catch (error) {
      // Handle any errors that might occur during the flag evaluation
      console.error('Error evaluating the feature flag:', error);
    }
  })();

  return {
    isTestFlagEnabled,
  };
}
