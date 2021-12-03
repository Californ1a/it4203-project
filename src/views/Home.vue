<template>
  <div class="home">
    <div class="main-content">
      <div class="main-main">
        <div class="movie-list" :class="movieStore.layout">
          <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id"
            :layout="movieStore.layout" />
        </div>
        <div v-if="movieStore.loading" class="progress blue lighten-4">
          <div class="indeterminate blue darken-3"></div>
        </div>
        <div v-if="movieStore.error" class="card red">
          <div class="card-content white-text">
            <span class="card-title">{{ movieStore.error }}</span>
          </div>
        </div>
      </div>
      <Filters />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import MovieCard from '@/components/MovieCard.vue';
import Filters from '@/components/Filters.vue';

export default {
  components: {
    MovieCard,
    Filters,
  },
  setup() {
    const store = useStore();

    store.dispatch('getMovies');

    const movieStore = store.state.movieList;

    window.onscroll = async () => {
      const de = document.documentElement;
      const bottomOfWindow = de.scrollTop + window.innerHeight >= de.offsetHeight - 150;
      if (bottomOfWindow && !movieStore.loading && !movieStore.error) {
        await store.dispatch('getMoreMovies');
      }
    };

    return {
      movieStore,
      movies: computed(() => store.state.movieList.data),
    };
  },
};
</script>

<style>
.movie-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.main-content {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.home.container {
  width: 87%;
  max-width: unset;
}

.main-main {
  flex: 1;
}

.grid_off {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 1100px;
  margin: auto;
}

.grid_off .card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 90%;
}

.grid_off .card-title {
  height: 100%;
  padding: 16px 24px;
  margin: 0;
}

.grid_off .card-reveal .card-title {
  padding: 5px 10px;
  height: auto;
}

.grid_off .card-image img {
  width: 80px !important;
  margin: 0;
}

.grid_off .card-image,
.grid_off .card-action {
  width: fit-content;
}

.grid_off .card-content {
  padding: 0;
}

.grid_off .card-action {
  height: fit-content;
}

.grid_off .card .card-action a {
  margin-right: 0 !important;
}
</style>
