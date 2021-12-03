import { createStore } from 'vuex';

import API from '@/lib/API';

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
  },
  mutations: {
    setMovieList(state, payload) {
      state.movieList.data = payload.results.map((movie) => ({
        ...movie,
        overview: (movie.overview) ? movie.overview : 'No overview available',
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      }));
    },
    incrementPage(state) {
      state.movieList.params.page += 1;
    },
    addToMovieList(state, payload) {
      state.movieList.data.push(...payload.results.map((movie) => ({
        ...movie,
        overview: (movie.overview) ? movie.overview : 'No overview available',
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      })));
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
      // console.log('payload', payload);
      // console.log('params', state.movieList.params);
      // console.log('params2', state.route.params);
      state.movieList.params.page = (payload && payload.page) ? payload.page : 1;
      state.movieList.params.type = (payload && payload.type) ? payload.type : 'popular';
      state.movieList.params.query = (payload && payload.query) ? payload.query : '';
    },
  },
  actions: {
    async getMovies(context) {
      context.commit('toggleMovieListLoading');
      context.dispatch('fetchParams');
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
      // console.log('fetchParams', context.state);
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
  },
  getters: {
    movieList(state) {
      return state.movieList;
    },
  },
  modules: {},
});
