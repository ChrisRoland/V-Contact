<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const showNav = route.name !== 'Home'
</script>

<template>
  <nav v-if="showNav" class="nav"> 
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/todo">ToDos</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login">Log In</router-link>
  </nav>
  <router-view />
</template>


<style>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
}
.nav a {
  text-decoration: none;
  color: #333;
}
.nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
