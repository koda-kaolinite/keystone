<script setup lang="ts">

import type {Property} from '~/types/property';

const page = ref(5)
const itemsPerPage = ref(2);
const totalItems = ref(100)

defineProps<{
  properties: Property[];
}>();
</script>

<template>
  <UPageGrid>
    <PropertyCard
        v-for="property in properties"
        :key="property.id"
        :property="property"
    />
  </UPageGrid>
  <div class="flex justify-center mt-8">
    <UPagination
        v-model:page="page" :show-controls="false" show-edges :items-per-page="itemsPerPage" :total="totalItems"/>
  </div>
</template>

<style scoped>
</style>

