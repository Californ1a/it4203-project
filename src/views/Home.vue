<template>
  <div class="home">
    <div class="main-content">
      <div class="main-main">
        <div class="movie-list" :class="layout">
          <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id"
            :layout="layout" />
        </div>
        <LoadOrError />
      </div>
      <Filters />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, watch } from 'vue';

import MovieCard from '@/components/MovieCard.vue';
import Filters from '@/components/Filters.vue';
import LoadOrError from '@/components/LoadOrError.vue';

export default {
  components: {
    MovieCard,
    Filters,
    LoadOrError,
  },
  setup() {
    const store = useStore();

    store.dispatch('getMovies');

    const type = computed(() => store.state.route.params.type);

    watch(type, (newType) => {
      console.log('newType', newType);
      if (!newType) return;
      store.dispatch('changeType', newType);
    });

    window.onscroll = async () => {
      if (store.state.route.name !== 'Home') return;
      const de = document.documentElement;
      const bottomOfWindow = de.scrollTop + window.innerHeight >= de.offsetHeight - 200;
      if (bottomOfWindow && !store.state.loading && !store.state.error) {
        await store.dispatch('getMoreMovies');
      }
    };

    return {
      layout: computed(() => store.state.movieList.layout),
      movies: computed(() => store.state.movieList.data),
    };
  },
  // computed: mapState({
  //   layout: (state) => state.movieList.layout,
  //   movies: (state) => state.movieList.data,
  // }),
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
