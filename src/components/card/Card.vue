<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {cn} from '../../utils/style'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg bg-card text-card-foreground border',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
