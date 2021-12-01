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
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import useMovies from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  setup() {
    const route = useRoute();
    const movieType = computed(() => route.params.type);
    watch(movieType, () => {
      const prettyType = movieType.value.replace('_', ' ')
        .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      document.title = `${prettyType} Movies | Movie App`;
    }, { immediate: true });
    const movieState = useMovies(movieType);
    const movies = computed(() => movieState.data.map((movie) => ({
      ...movie,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    })));

    return {
      movieState,
      movies,
    };
  },
};

</script>

<style scoped>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    margin: 20px 0 20px 0;
  }
</style>
