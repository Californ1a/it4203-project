<template>
  <div class="home">
    <div v-if="movieState.loading" class="progress blue lighten-4">
      <div class="indeterminate blue darken-3"></div>
    </div>
    <div v-if="movieState.error" class="card red">
      <div class="card-content white-text">
        <span class="card-title">{{ movieState.error }}</span>
      </div>
    </div>
    <div class="row">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import useMovies from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard.vue';

const props = defineProps({
  type: String,
});

const movieState = useMovies(props.type);

const movies = computed(() => movieState.data.map((movie) => ({
  ...movie,
  poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
})));
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
