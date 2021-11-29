<template>
  <MovieList :type="type" />
</template>

<script setup>
import MovieList from '@/components/MovieList.vue';

const type = 'popular';
</script>
