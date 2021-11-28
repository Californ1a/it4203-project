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
      <div class="col s3" v-for="movie in movies" :key="movie.id">
        <div class="card hoverable movie light-blue darken-4">
          <div v-if="isImage(movie.poster)" class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="movie.poster" />
          </div>
          <div class="card-content white-text">
            <p class="">{{movie.title}}</p>
          </div>
          <div class="card-action">
            <a :href="`https://www.themoviedb.org/movie/${movie.id}`">TMDB</a>
          </div>
          <!-- <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{movie.title}}
              <i class="material-icons right">more_vert</i></span>
            <p><a :href="`https://www.themoviedb.org/movie/${movie.id}`">TMDB</a></p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useMovies from '@/hooks/useMovies';

const movieState = useMovies('popular');

const movies = computed(() => movieState.data.map((movie) => ({
  ...movie,
  poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
})));

function isImage(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
