import { createStore } from 'vuex';

import API from '@/lib/API';

function formatMovieData(data) {
  return data.map((movie) => ({
    ...movie,
    overview: (movie.overview) ? movie.overview : 'No overview available',
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
  }));
}

export default createStore({
  state: {
    movieList: {
      loading: false,
      error: '',
      data: [],
      layout: 'grid_on',
      params: {
        page: 1,
        type: 'popular',
        query: '',
      },
    },
    pageTitle: '',
  },
  mutations: {
    setMovieList(state, payload) {
      state.movieList.data = formatMovieData(payload.results);
    },
    incrementPage(state) {
      state.movieList.params.page += 1;
    },
    addToMovieList(state, payload) {
      state.movieList.data.push(...formatMovieData(payload.results));
    },
    setMovieListType(state, payload) {
      state.movieList.params.type = payload;
      state.movieList.params.page = 1;
      state.movieList.params.query = '';
    },
    setMovieListQuery(state, payload) {
      state.movieList.params.query = payload;
    },
    setMovieListLayout(state, payload) {
      state.movieList.layout = payload;
    },
    toggleMovieListLoading(state) {
      state.movieList.loading = !state.movieList.loading;
    },
    setMovieListError(state, payload) {
      state.movieList.error = payload;
    },
    setMovieListParams(state, payload) {
      state.movieList.params = {
        page: payload?.page ?? 1,
        type: payload?.type ?? 'popular',
        query: payload?.query ?? '',
      };
    },
    setPageTitle(state, payload) {
      state.pageTitle = payload;
      document.title = state.pageTitle;
    },
  },
  actions: {
    async getMovies(context) {
      context.commit('toggleMovieListLoading');
      context.dispatch('fetchParams');
      context.dispatch('setPageTitle');
      try {
        const res = await API.getMovies(context.state.movieList.params.type, {
          query: context.state.movieList.params.query,
          page: context.state.movieList.params.page,
        });
        context.commit('setMovieList', res);
      } catch (err) {
        context.commit('setMovieListError', err.message);
      } finally {
        context.commit('toggleMovieListLoading');
      }
    },
    async getMoreMovies(context) {
      context.commit('toggleMovieListLoading');
      context.commit('incrementPage');
      try {
        const res = await API.getMovies(context.state.movieList.params.type, {
          query: context.state.movieList.params.query,
          page: context.state.movieList.params.page,
        });
        context.commit('addToMovieList', res);
      } catch (err) {
        context.commit('setMovieListError', err.message);
      } finally {
        context.commit('toggleMovieListLoading');
      }
    },
    fetchParams(context) {
      context.commit('setMovieListParams', context.state.route.params);
    },
    changeLayout(context) {
      const payload = (context.state.movieList.layout === 'grid_off') ? 'grid_on' : 'grid_off';
      context.commit('setMovieListLayout', payload);
    },
    async changeType(context, payload) {
      context.commit('toggleMovieListLoading');
      context.commit('setMovieListType', payload);
      await context.dispatch('getMovies');
      context.commit('toggleMovieListLoading');
    },
    setPageTitle(context) {
      if (context.state.movieList.params.query === '' && context.state.movieList.params.type !== 'search') {
        const prettyType = context.state.movieList.params.type.replace('_', ' ')
          .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        context.commit('setPageTitle', `${prettyType} Movies | Movie App`);
      } else {
        const ellipsis = (context.state.movieList.params.query.length > 20) ? '...' : '';
        context.commit('setPageTitle', `Search: ${context.state.movieList.params.query}${ellipsis} | Movie App`);
      }
    },
  },
  getters: {},
  modules: {},
});
