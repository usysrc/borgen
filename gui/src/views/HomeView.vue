<script setup lang="ts">
  import { useFlagEnabled } from '@/components/flag';

  const { isTestFlagEnabled } = useFlagEnabled('test');
</script>

<template>
  <main>
    hi
    <p v-if="isTestFlagEnabled">
      hi from inside the flag
    </p>
  </main>
</template>
