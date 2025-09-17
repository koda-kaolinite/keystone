<script setup lang="ts">
import {computed} from 'vue'

// Definindo os tipos para as variantes e elementos HTML
type TextVariant =
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    | 'body-lg' | 'body-base' | 'body-sm' | 'body-xs' | 'body-bold' | 'body-muted'

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

const props = defineProps<{
  as?: TextElement
  variant: TextVariant
}>()

const variantClasses: Record<TextVariant, string> = {

  // Títles - Sora
  h1: 'font-sora text-5xl font-heading font-extrabold',
  h2: 'font-sora text-4xl font-heading font-bold',
  h3: 'font-sora text-3xl font-heading font-semibold',
  h4: 'font-sora text-2xl font-heading font-medium',
  h5: 'font-sora text-xl font-heading font-medium',

  // Body - Inter
  'body-lg': 'font-inter text-lg font-body',
  'body-base': 'font-inter text-base font-body',
  'body-sm': 'font-inter text-sm font-body',
  'body-xs': 'font-inter text-xs font-body',
  'body-bold': 'font-inter text-base font-body font-semibold',
  'body-muted': 'font-inter text-base font-body opacity-60'
}

const computedClass = computed(() => variantClasses[props.variant])

const computedTag = computed(() => {
  if (props.as) return props.as
  if (props.variant.startsWith('h')) return props.variant
  return 'p'
})
</script>

<template>
  <component :is="computedTag" :class="computedClass">
    <slot/>
  </component>
</template>