<template>
  <div class="movie-card">
    <div class="card hoverable movie light-blue darken-4">
      <div v-if="isImage" class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="movie.poster" />
      </div>
      <div class="card-content white-text">
        <p class="">{{movie.title}}</p>
      </div>
      <div class="card-action">
        <a :href="`https://www.themoviedb.org/movie/${movie.id}`">TMDB</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  movie: Object,
});

const isImage = computed(() => props.movie.poster.match(/\.(jpeg|jpg|gif|png)$/) != null);
</script>

<style scoped>
  .movie-card img {
    width: 220px;
    /* height: auto; */
    margin: auto;
  }

  .movie-card {
    flex: 1;
  }

  .movie {
    width: 220px;
    margin: auto;
  }
</style>