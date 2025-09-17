<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui"
import {en, pt_br} from '@nuxt/ui-pro/locale'

const {locale, setLocale, t} = useI18n();

const props = defineProps({
  navigationItems: {
    type: Array as () => NavigationMenuItem[],
    default: undefined
  }
})

const items = computed<NavigationMenuItem[]>(() => {
  if (props.navigationItems) {
    return props.navigationItems
  }

  return [
    {
      label: t('header.navigation.rent.label'),
      to: '/rent',
      children: [
        {label: t('header.navigation.rent.child.city1.label')},
        {label: t('header.navigation.rent.child.city2.label')},
        {label: t('header.navigation.rent.child.city3.label')},
        {label: t('header.navigation.rent.child.city4.label')},
        {label: t('header.navigation.rent.child.city5.label')},
        {label: t('header.navigation.rent.child.city6.label')},
        {label: t('header.navigation.rent.child.city7.label')},
        {label: t('header.navigation.rent.child.city8.label')},
        {label: t('header.navigation.rent.child.city9.label')},
        {label: t('header.navigation.rent.child.city10.label')}
      ]
    }, {
      label: t('header.navigation.buy.label'),
      to: '/buy',
      children: [
        {label: t('header.navigation.buy.child.city1.label')},
        {label: t('header.navigation.buy.child.city2.label')},
        {label: t('header.navigation.buy.child.city3.label')},
        {label: t('header.navigation.buy.child.city4.label')},
        {label: t('header.navigation.buy.child.city5.label')},
        {label: t('header.navigation.buy.child.city6.label')},
        {label: t('header.navigation.buy.child.city7.label')},
        {label: t('header.navigation.buy.child.city8.label')},
        {label: t('header.navigation.buy.child.city9.label')},
        {label: t('header.navigation.buy.child.city10.label')}
      ]
    }, {
      label: t('header.navigation.listing.label'),
      to: '/listing',
      children: [
        {label: t('header.navigation.listing.child.rent.label')},
        {label: t('header.navigation.listing.child.sell.label')}
      ]
    }, {
      label: t('header.navigation.help.label'),
      to: '/help',
      children: [
        {label: t('header.navigation.help.child.customer-service.label')},
        {label: t('header.navigation.help.child.faq.label')},
        {label: t('header.navigation.help.child.about-us.label')},
        {label: t('header.navigation.help.child.security.label')},
        {label: t('header.navigation.help.child.fraud-prevention.label')}
      ]
    }
  ]
})
</script>

<template>
  <UHeader>
    <template #title>
      <UIcon name="tabler:building" class="size-8"/>
      {{ t('header.title') }}
    </template>

    <UNavigationMenu :items="items" content-orientation="vertical"/>

    <template #right>
      <ULocaleSelect v-model="locale" :locales="[pt_br, en]" @update:model-value="setLocale($event)"/>
      <UColorModeButton/>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5"/>
    </template>
  </UHeader>
</template>

<style scoped>
</style>