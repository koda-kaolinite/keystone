<script setup lang="ts">
import TypographyText from '~/components/typography/Text.vue';
import type {Property} from '~/types/property';

const {t} = useI18n();

defineProps<{
  property: Property;
}>();
</script>

<template>
  <NuxtLink :to="`/property/${property.id}`" target="_blank">
    <UPageCard class="h-165 mb-2 items-start bg-muted">
      <!-- Image -->
      <div
          class="aspect-video overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <div class="w-full h-full flex items-center justify-center text-8xl opacity-30">🏠</div>
      </div>

      <!-- Content -->
      <div class="space-y-6">
        <div>
          <TypographyText variant="h3" class="mb-2">{{ property.title }}</TypographyText>
          <TypographyText variant="body-lg" class="opacity-80">{{ property.location }}</TypographyText>
        </div>

        <TypographyText variant="h2" class="text-primary">
          R$ {{ property.price.toLocaleString('pt-BR') }}
        </TypographyText>

        <TypographyText variant="body-sm">
          <span>🛏️ {{ property.bedrooms }} {{ t('propertyCard.bedrooms') }}</span>
          <span class="ml-4">🚿 {{ property.bathrooms }} {{ t('propertyCard.bathrooms') }}</span>
          <span class="ml-4">📐 {{ property.area }}{{ t('propertyCard.areaUnit') }}</span>
        </TypographyText>

        <TypographyText variant="body-base">
          {{ property.description }}
        </TypographyText>
      </div>
    </UPageCard>
  </NuxtLink>
</template>

<style scoped>
</style>
