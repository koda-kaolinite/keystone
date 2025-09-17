<script setup lang="ts">
import type {NuxtError} from '#app'

defineProps<{
  error: NuxtError
}>();
</script>

<template>
  <UError
      :error="{
    statusCode: 404,
    statusMessage: 'Page Not Found',
    message: 'The page you were looking for does not exist.'
  }"/>
</template>

<style scoped>

</style>