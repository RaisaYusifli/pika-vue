<script setup lang="ts">
import {Header} from './components/index'
import { Card, CardHeader, CardFooter, CardContent } from './components/card';
import { useGetAllPokemons } from './shared/hooks/useGetAllPokemons';

const { data } = useGetAllPokemons();
console.log("pokemons get all data: ", data)
</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
    <Card class="w-64 mx-[200px]">
      <CardHeader>
        pika id
     </CardHeader>
      <CardContent>
        pika img
      </CardContent>
      <CardFooter>
       pika name
      </CardFooter>
    </Card>
  </main>
</template>