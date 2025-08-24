<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>Pika app</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/details">Details</RouterLink> | 

    <RouterView/>
  </nav>
</template>

<style>
nav {
  margin: 20px 0;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
