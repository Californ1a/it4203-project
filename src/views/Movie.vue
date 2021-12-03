<template>
  <div class="movie">
    <LoadOrError />
    <div class="movie-header">
      <h1 class="movie-title">{{ movie.title }}</h1>
      <div class="movie-rating">
        <span class="movie-rating-value">{{ movie.rating }}</span>
        <span class="movie-rating-label">/10</span>
      </div>
    </div>
    <div class="movie-content">
      <div class="movie-poster">
        <img :src="movie.poster" alt="">
      </div>
      <div class="movie-description">
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import LoadOrError from '../components/LoadOrError.vue';

export default {
  components: {
    LoadOrError,
  },
  setup() {
    const store = useStore();

    const state = computed(() => store.state);

    store.dispatch('getMovieDetails');

    const movie = computed(() => store.state.movieDetails);

    console.log(movie.value);

    return {
      state,
      movie: computed(() => store.state.movieDetails.data),
    };
  },
};
</script>

<style scoped>
.movie {
  color: white;
}
</style>
