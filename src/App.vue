<script setup lang="ts">
import { Card, CardContent, CardHeader } from './components/card';
import { Pokemon, Hamburger } from './assets/index'
import Button from './components/ui/button/Button.vue';
import Input from './components/ui/input/Input.vue';
</script>

<template>
  <header>
    <Card style="background-color: #FED873; border-radius: 0 0 20px 20px; padding-top: 80px;">
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
        <Input 
          type="search" 
          placeholder="Search Pokémon..."
          style="width: 100%; padding: 15px; border-radius: 20px; border: 1px solid #ddd;"
        />
      </CardContent>
  <div class="p-4">
    <!-- Default button -->
    <Button>Click me</Button>
    
    <!-- Different variants -->
    <Button variant="destructive">Delete</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    
    <!-- Different sizes -->
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">🚀</Button>
    
    <!-- Disabled state -->
    <Button disabled>Disabled</Button>
    
    <!-- With custom classes -->
    <Button class="w-full">Full Width</Button>
  </div>
    </Card>
  </header>
</template>