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
          <select v-model="sortBy" @input="changeSort">
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
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import API from '@/lib/API';
import useMovies from '@/hooks/useMovies';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const movieType = computed(() => route.params.type);
    const movieState = useMovies(movieType);
    watch(movieType, () => {
      const prettyType = movieType.value.replace('_', ' ')
        .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      document.title = `${prettyType} Movies | Movie App`;
    }, { immediate: true });
    const movies = computed(() => movieState.data.map((movie) => ({
      ...movie,
      overview: (movie.overview) ? movie.overview : 'No overview available',
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    })));

    window.onscroll = async () => {
      const de = document.documentElement;
      const bottomOfWindow = de.scrollTop + window.innerHeight >= de.offsetHeight - 150;
      if (bottomOfWindow && !movieState.loading && !movieState.error) {
        movieState.loading = true;
        try {
          movieState.page += 1;
          const res = await API.getMovies(movieType.value, movieState.page);
          movieState.data.push(...res.results);
          movieState.loading = false;
        } catch (err) {
          movieState.error = err.message || 'Something went wrong';
          movieState.loading = false;
        }
      }
    };

    const changeSort = (e) => {
      if (e.target.value !== movieType.value) {
        router.push({
          name: 'Home',
          params: {
            type: e.target.value,
          },
        });
      }
    };

    const changeLayout = () => {
      movieState.layout = (movieState.layout === 'grid_off') ? 'grid_on' : 'grid_off';
    };

    return {
      movieState,
      movies,
      changeSort,
      changeLayout,
    };
  },
  data() {
    return {
      sortBy: this.movieState.type,
      sortByOptions: [
        { text: 'Popular', value: 'popular' },
        { text: 'Now Playing', value: 'now_playing' },
        { text: 'Top Rated', value: 'top_rated' },
        { text: 'Upcoming', value: 'upcoming' },
      ],
    };
  },
  updated() {
    this.sortBy = this.movieState.type;
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
}

.grid_off .card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 90%;
}

/* .grid_off .card .card-reveal {
  display: none !important;
} */

/* .grid_off .card-reveal .card-title,
.grid_off .card-reveal p {
  margin-right: 12.4%;
} */

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
