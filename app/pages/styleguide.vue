<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'
import ColorSwatch from '~/components/styleguide/ColorSwatch.vue';
import PropertyCatalog from "~/components/layout/PropertyCatalog.vue";

const placeholderItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Placeholder',
    children: [
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
    ]
  },
  {
    label: 'Placeholder',
    children: [
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
    ]
  },
  {
    label: 'Placeholder',
    children: [
      {label: 'Placeholder'},
      {label: 'Placeholder'},
    ]
  },
  {
    label: 'Placeholder',
    children: [
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
      {label: 'Placeholder'},
    ]
  }
]);

const {t} = useI18n();

const mainColors = [
  {
    colorClass: 'bg-primary',
    name: t('colorSwatch.main.primary.name'),
    description: t('colorSwatch.main.primary.description')
  },
  {
    colorClass: 'bg-secondary',
    name: t('colorSwatch.main.secondary.name'),
    description: t('colorSwatch.main.secondary.description')
  },
];

const systemColors = [
  {
    colorClass: 'bg',
    name: t('colorSwatch.system.background.name'),
    description: t('colorSwatch.system.background.description'),
    hasBorder: true
  },
  {
    colorClass: 'bg-muted',
    name: t('colorSwatch.system.surface.name'),
    description: t('colorSwatch.system.surface.description'),
    hasBorder: true
  },
  {
    colorClass: 'bg-foreground',
    name: t('colorSwatch.system.text.name'),
    description: t('colorSwatch.system.text.description')
  },
];

const sampleProperties = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendume."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 280000,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendume."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam."
  }, {
    id: 4,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendume."
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 280000,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendume."
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit ametiel.",
    location: "Lorem, ipsum - doloriel",
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam."
  }
];
</script>

<template>
  <div>
    <LayoutHeader :navigation-items="placeholderItems"/>
    <UMain>
      <UPageHero>
        <template #title>
          <TypographyText variant="h1">
            {{ t('styleguide.hero.title') }}
          </TypographyText>

          <TypographyText variant="h2" class="opacity-60">
            {{ t('styleguide.hero.subtitle') }}
          </TypographyText>
        </template>
        <template #description>
          <div class="flex justify-center">
            <TypographyText as="p" variant="body-bold" class="w-3/4">
              {{ t('styleguide.hero.description') }}
            </TypographyText>
          </div>
        </template>

        <template #body>
          <div class="flex justify-center">
            <UButton class="mr-3.5" to="#typography">
              <TypographyText variant="body-base">{{ t('styleguide.typography.title') }}</TypographyText>
            </UButton>
            <UButton class="mr-3.5" to="#colorectal">
              <TypographyText variant="body-base">{{ t('styleguide.colors.title') }}</TypographyText>
            </UButton>
            <UButton class="mr-3.5" to="#propertyCatalog">
              <TypographyText variant="body-base">{{ t('styleguide.propertyCatalog.title') }}</TypographyText>
            </UButton>
            <UButton to="">
              <TypographyText variant="body-base">{{ t('styleguide.typography.title') }}</TypographyText>
            </UButton>
          </div>
        </template>
      </UPageHero>

      <UPageSection id="typography">
        <template #title>
          <TypographyText variant="h2">{{ t('styleguide.typography.title') }}</TypographyText>
        </template>

        <UPageGrid class="lg:grid-cols-2">
          <UPageCard class="bg-muted">
            <TypographyText variant="h4" class="mb-6">{{ t('styleguide.typography.titles.title') }}</TypographyText>
            <div class="space-y-4">
              <TypographyText variant="h1">{{ t('styleguide.typography.titles.h1') }}</TypographyText>
              <TypographyText variant="h2">{{ t('styleguide.typography.titles.h2') }}</TypographyText>
              <TypographyText variant="h3">{{ t('styleguide.typography.titles.h3') }}</TypographyText>
              <TypographyText variant="h4">{{ t('styleguide.typography.titles.h4') }}</TypographyText>
              <TypographyText variant="h5">{{ t('styleguide.typography.titles.h5') }}</TypographyText>
            </div>
          </UPageCard>
          <UPageCard class="bg-muted">
            <TypographyText variant="h4" class="mb-6">{{ t('styleguide.typography.body.title') }}</TypographyText>
            <div class="space-y-4">
              <TypographyText variant="body-lg">{{ t('styleguide.typography.body.lg') }}</TypographyText>
              <TypographyText variant="body-base">{{ t('styleguide.typography.body.base') }}</TypographyText>
              <TypographyText variant="body-sm">{{ t('styleguide.typography.body.sm') }}</TypographyText>
              <TypographyText variant="body-xs">{{ t('styleguide.typography.body.xs') }}</TypographyText>
              <TypographyText variant="body-bold">{{ t('styleguide.typography.body.bold') }}</TypographyText>
              <TypographyText variant="body-muted">{{ t('styleguide.typography.body.muted') }}
              </TypographyText>
            </div>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <UPageSection id="colorectal">
        <template #title>
          <TypographyText variant="h2"> {{ t('styleguide.colors.title') }}</TypographyText>
        </template>

        <UPageGrid class="lg:grid-cols-2">
          <UPageCard class="bg-muted">
            <TypographyText variant="h3" class="mb-6">{{ t('styleguide.colors.mainColors.title') }}</TypographyText>
            <div class="space-y-4">
              <ColorSwatch
                  v-for="color in mainColors"
                  :key="color.name"
                  :color-class="color.colorClass"
                  :name="color.name"
                  :description="color.description"
              />
            </div>
          </UPageCard>
          <UPageCard class="bg-muted">
            <TypographyText variant="h3" class="mb-6">{{ t('styleguide.colors.systemColors.title') }}</TypographyText>
            <div class="space-y-4">
              <ColorSwatch
                  v-for="color in systemColors"
                  :key="color.name"
                  :color-class="color.colorClass"
                  :name="color.name"
                  :description="color.description"
                  :has-border="color.hasBorder"
              />
            </div>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <UPageSection id="propertyCatalog">
        <template #title>
          <TypographyText variant="h2">
            {{ t('styleguide.propertyCatalog.title') }}
          </TypographyText>
        </template>

        <PropertyCatalog :properties="sampleProperties"/>
      </UPageSection>
    </UMain>
  </div>
</template>

<style scoped>
</style>