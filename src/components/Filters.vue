<template>
  <div class="filters">
    <!-- TODO TV/Movie toggle
        https://codepen.io/personable/pen/stpwD?__cf_chl_captcha_tk__=Afz.BvUzUxQKL5iFgNggt5ttfVITuZgvJHNMrKnLolQ-1638469048-0-gaNycGzNCdE -->
    <div class="filter-group">
      <a class="waves-effect waves-light btn blue darken-3" @click="changeLayout">
        <i class="material-icons left">
          {{(movieStore.layout === 'grid_off') ? 'grid_on' : 'grid_off'}}
        </i>change layout</a>
    </div>
    <div class="filter-group">
      <label>Sort by:</label>
      <select v-model="movieStore.params.type" @input="changeSort">
        <option v-for="option in sortByOptions"
          :key="option.value" :value="option.value">
          {{option.text}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const movieStore = store.state.movieList;

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
      movieStore,
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

<style scoped>
select {
  display: initial;
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

.filters label {
  font-size: 1.2rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
</style>
