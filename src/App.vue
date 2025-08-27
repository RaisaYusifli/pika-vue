<script setup lang="ts">
import { Header, PokemonCard } from './components/index'
import { useGetAllPokemons } from './shared/apiHooks/useGetAllPokemons';

const { data, isLoading, isError, error } = useGetAllPokemons();

console.log("pokemons get all data: ", data?.value);


</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
    <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
      <p class="text-gray-500">Loading Pokemon...</p>
    </div>
    
    <div v-else-if="isError" class="flex justify-center items-center min-h-screen">
      <p class="text-red-500">Error loading Pokemon: {{ error?.message }}</p>
    </div>
    
    <div v-else-if="!data?.content?.content || data.content.content.length === 0" class="flex justify-center items-center min-h-screen">
      <p class="text-gray-500">No Pokemon found</p>
    </div>
     
    <div v-else class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <PokemonCard 
          v-for="pokemon in data.content.content"
          :key="pokemon.id"
          :id=" pokemon.id"
          :name="pokemon.name"
          :image="pokemon.image"
          :type="pokemon.pokedexNumber"
        />
      </div>
      
      <!-- <div v-if="data.content.page" class="mt-8 text-center text-gray-600">
        <p>Page {{ data.content.page.number }} of {{ Math.abs(data.content.page.totalPages) }}</p>
        <p class="text-sm">Total Pokemon: {{ data.content.page.totalElements }}</p>
      </div> -->
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  background-color: #f3f4f6;
}
</style>