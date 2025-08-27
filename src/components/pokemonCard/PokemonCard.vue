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
</script>

<template>
  <Card class="w-64 bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-400 rounded-xl overflow-hidden shadow-lg">
    <CardHeader class="relative pb-2 pt-3 px-4">
      <span class="absolute top-2 right-3 text-gray-600 font-semibold text-sm">
        #{{ String(props.id).padStart(3, '0') }}
      </span>
    </CardHeader>
    
    <!-- <CardContent class="px-6 pb-3">
      <div class="bg-white/80 rounded-lg p-4 shadow-inner">
        <img 
          :src="props.image" 
          :alt="props.name"
          class="w-full h-32 object-contain"
          @error="(e) => (e.target as HTMLImageElement).src = '/placeholder-pokemon.png'"
        />
      </div>
    </CardContent> -->
    
    <CardFooter class="flex flex-col items-center pb-4 px-4">
      <h3 class="text-lg font-bold text-gray-800 capitalize mb-1">
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