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

<style scoped>
</style>
