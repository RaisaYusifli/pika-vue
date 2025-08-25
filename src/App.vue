<script setup lang="ts">
import { Card, CardContent, CardHeader } from './components/card';
import { Pokemon, Hamburger } from './assets/index'
</script>

<template>
  <header>
    <Card style="background-color: #FED873; border-radius: 0 0 20px 20px; padding: 100px;">
      <CardHeader>
        <nav style="display: flex; justify-content: space-between; align-items: center; gap: 2rem;">
          <span style="font-weight: 600;">Pika!</span>
          <img :src="Pokemon" alt="Pika Logo" width="100" />
          <button style="border: none; background: none; cursor: pointer;">
            <img :src="Hamburger" alt="Menu" />
          </button>
        </nav>
      </CardHeader>
      <CardContent style="margin-top: 4rem;">
        <input 
          type="search" 
          placeholder="Search Pokémon..."
          style="width: 100%; padding: 15px; border-radius: 20px; border: 1px solid #ddd;"
        />
      </CardContent>
    </Card>
  </header>
</template>