<template>
  <NavBar />
  <router-view class="container" />
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
  body {
    background-color: #1B1725;
  }
</style>
