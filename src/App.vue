<template>
  <NavBar />
  <router-view class="container" />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style>
  body {
    background-color: #1B1725;
  }
</style>
