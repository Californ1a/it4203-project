<template>
  <div class="home">
    <div class="main-content">
      <div class="main-main">
        <div class="movie-list" :class="movieState.layout">
          <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id"
            :layout="movieState.layout" />
        </div>
        <div v-if="movieState.loading" class="progress blue lighten-4">
          <div class="indeterminate blue darken-3"></div>
        </div>
      </div>
      <div class="filters">
        <!-- TODO TV/Movie toggle
        https://codepen.io/personable/pen/stpwD?__cf_chl_captcha_tk__=Afz.BvUzUxQKL5iFgNggt5ttfVITuZgvJHNMrKnLolQ-1638469048-0-gaNycGzNCdE -->
        <div class="filter-group">
          <a class="waves-effect waves-light btn blue darken-3" @click="changeLayout">
            <i class="material-icons left">
              {{(movieState.layout === 'grid_off') ? 'grid_on' : 'grid_off'}}
            </i>change layout</a>
        </div>
        <div class="filter-group">
          <label>Sort by:</label>
          <select v-model="movieState.params.type" @input="changeSort">
            <option v-for="option in sortByOptions"
              :key="option.value" :value="option.value">
              {{option.text}}
            </option>
          </select>
        </div>
        <!-- <div class="filter-group">
          <label>Filter by:</label>
          <select v-model="filterBy">
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="scifi">Sci-Fi</option>
          </select>
        </div> -->
      </div>
    </div>
    <div v-if="movieState.error" class="card red">
      <div class="card-content white-text">
        <span class="card-title">{{ movieState.error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';

import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch('getMovies');
    store.dispatch('setPageTitle');

    const pageTitle = computed(() => store.getters.pageTitle);
    document.title = store.state.pageTitle;

    watch(pageTitle, () => {
      document.title = store.state.pageTitle;
    });

    const movieStore = store.state.movieList;

    window.onscroll = async () => {
      const de = document.documentElement;
      const bottomOfWindow = de.scrollTop + window.innerHeight >= de.offsetHeight - 150;
      if (bottomOfWindow && !movieStore.loading && !movieStore.error) {
        await store.dispatch('getMoreMovies');
      }
    };

    const changeSort = async (e) => {
      if (e.target.value !== store.state.movieList.params.type) {
        await router.push({
          name: 'Home',
          params: {
            type: e.target.value,
          },
        });
        await store.dispatch('getMovies');
      }
    };

    return {
      movieState: computed(() => store.state.movieList),
      movies: computed(() => store.state.movieList.data),
      changeSort,
      changeLayout: () => {
        store.dispatch('changeLayout');
      },
    };
  },
  data() {
    return {
      sortByOptions: [
        { text: 'Popular', value: 'popular' },
        { text: 'Now Playing', value: 'now_playing' },
        { text: 'Top Rated', value: 'top_rated' },
        { text: 'Upcoming', value: 'upcoming' },
      ],
    };
  },
};
</script>

<style>
select {
  display: initial;
}

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

.filters {
  flex: 0.2;
  max-width: 200px;
  min-width: 111px;
  height: fit-content;
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-main {
  flex: 1;
}

.filters label {
  font-size: 1.2rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
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
