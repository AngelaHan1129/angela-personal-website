<template>
  <header class="navbar">
    <div class="navbar__inner">
      <router-link to="/" class="navbar__logo">
        <span class="logo-mark">HPX</span>
        <span class="logo-text">Han Pei Xuan</span>
      </router-link>

      <nav class="navbar__nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/awards">Awards</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>