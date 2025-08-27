<script setup lang="ts">
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card'

interface Props {
  id: string
  name: string
  image?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '0',
  name: 'Unknown',
  image: '/placeholder-pokemon.png',
  type: 'Unknown Type'
})

console.log(props.image)
</script>

<template>
  <Card class="w-64 overflow-hidden border-2 border-yellow-400 shadow-lg bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-xl">
    <CardHeader class="relative px-4 pt-3 pb-2">
      <span class="absolute text-sm font-semibold text-gray-600 top-2 right-3">
        #{{ String(props.id).padStart(3, '0') }}
      </span>
    </CardHeader>
    
    <CardContent class="px-6 pb-3">
      <div class="p-4 rounded-lg shadow-inner bg-white/80">
        <img 
          :src="props.image" 
          :alt="props.name"
          class="object-contain w-full h-32"
          @error="(e) => (e.target as HTMLImageElement).src = '/placeholder-pokemon.png'"
        />
      </div>
    </CardContent>
    
    <CardFooter class="flex flex-col items-center px-4 pb-4">
      <h3 class="mb-1 text-lg font-bold text-gray-800 capitalize">
        {{ props.name }}
      </h3>
      <span class="text-sm text-gray-600">
        {{ props.type }}
      </span>
    </CardFooter>
  </Card>
</template>

<style scoped>
.card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>