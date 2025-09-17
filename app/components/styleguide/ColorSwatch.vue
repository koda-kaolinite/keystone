<script setup lang="ts">
import { defineProps } from 'vue';
import TypographyText from '~/components/typography/Text.vue';

const { t } = useI18n();

defineProps<{
  colorClass: string;
  name: string;
  description: string;
  hasBorder?: boolean;
}>();
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="w-16 h-16 rounded-md" :class="[colorClass, { 'border': hasBorder }]"></div>
    <div>
      <TypographyText variant="body-bold">{{ name }}</TypographyText>
      <TypographyText variant="body-sm" class="opacity-60">{{ description }}</TypographyText>
    </div>
  </div>
</template>
