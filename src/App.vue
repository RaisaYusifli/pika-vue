<script setup lang="ts">
import { Card, CardContent, CardHeader } from './components/card';
import { Pokemon, Hamburger, Search } from './assets/index'
import Input from './components/ui/input/Input.vue';
</script>

<template>
  <header>
    <Card style="background-color: #FED873; border-radius: 0 0 20px 20px; padding: 80px 200px 100px 200px;">
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
        <div style="position: relative; width: 100%;">
          <img 
            :src="Search" 
            alt="Search" 
            style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; z-index: 1;"
          />
          <Input 
            type="search" 
            placeholder="Press ENTER to start searching"
            style="width: 100%; padding: 20px 20px 20px 45px; border-radius: 20px; border: 1px solid #ddd; background-color: #F9F9F9;"
          />
        </div>
      </CardContent>
    </Card>
  </header>
</template>