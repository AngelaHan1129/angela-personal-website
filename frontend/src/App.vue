<template>
  <div class="app-shell">
    <Navbar />
    <main class="main-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>