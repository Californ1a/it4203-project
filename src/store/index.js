import { createStore } from 'vuex';

import API from '@/lib/API';

function formatMovieData(data) {
  if (!data) return {};
  if (Array.isArray(data) && data.length === 0) return [];
  if (typeof data === 'object' && Object.keys(data).length === 0) return {};
  const formatter = (movie) => ({
    ...movie,
    overview: (movie.overview) ? movie.overview : 'No overview available',
    poster: (movie.poster_path) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
    backdrop: (movie.backdrop_path) ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '',
  });
  return (Array.isArray(data)) ? data.map(formatter) : formatter(data);
}

export default createStore({
  state: {
    loading: false,
    error: '',
    movieList: {
      data: [],
      layout: 'grid_on',
      params: {
        page: 1,
        type: 'popular',
        query: '',
      },
    },
    pageTitle: 'Movie App',
    movieDetails: {
      data: {
        title: '',
      },
      id: '',
    },
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
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    setError(state, payload) {
      state.error = payload;
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
    setMovieDetails(state, payload) {
      // console.log(payload);
      state.movieDetails.data = formatMovieData(payload);
    },
    setMovieDetailsId(state, payload) {
      state.movieDetails.id = payload;
    },
  },
  actions: {
    async getMovies(context) {
      context.commit('toggleLoading');
      context.dispatch('fetchParams');
      context.dispatch('setPageTitle');
      context.commit('setMovieDetails', {});
      context.commit('setMovieDetailsId', '');
      try {
        const res = await API.getMovies(context.state.movieList.params.type, {
          query: context.state.movieList.params.query,
          page: context.state.movieList.params.page,
        });
        // console.log(res);
        context.commit('setMovieList', res);
      } catch (err) {
        context.commit('setError', err.message);
      } finally {
        context.commit('toggleLoading');
      }
    },
    async getMoreMovies(context) {
      context.commit('toggleLoading');
      context.commit('incrementPage');
      try {
        const res = await API.getMovies(context.state.movieList.params.type, {
          query: context.state.movieList.params.query,
          page: context.state.movieList.params.page,
        });
        context.commit('addToMovieList', res);
      } catch (err) {
        context.commit('setError', err.message);
      } finally {
        context.commit('toggleLoading');
      }
    },
    fetchParams(context) {
      if (context.state.route.name === 'Home') {
        context.commit('setMovieListParams', context.state.route.params);
      } else if (context.state.route.name === 'Movie') {
        context.commit('setMovieDetailsId', context.state.route.params.id);
      }
    },
    changeLayout(context) {
      const payload = (context.state.movieList.layout === 'grid_off') ? 'grid_on' : 'grid_off';
      context.commit('setMovieListLayout', payload);
    },
    async changeType(context, payload) {
      context.commit('toggleLoading');
      context.commit('setMovieListType', payload);
      await context.dispatch('getMovies');
      context.commit('toggleLoading');
    },
    setPageTitle(context) {
      if (context.state.route.name === 'Home') {
        if (context.state.movieList.params.query === '' && context.state.movieList.params.type !== 'search') {
          const prettyType = context.state.movieList.params.type.replace('_', ' ')
            .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
          context.commit('setPageTitle', `${prettyType} Movies | Movie App`);
        } else {
          const ellipsis = (context.state.movieList.params.query.length > 20) ? '...' : '';
          context.commit('setPageTitle', `Search: ${context.state.movieList.params.query}${ellipsis} | Movie App`);
        }
      } else if (context.state.route.name === 'Movie') {
        context.commit('setPageTitle', `${context.state.movieDetails.data.title} | Movie App`);
      }
    },
    async getMovieDetails(context) {
      context.commit('toggleLoading');
      context.dispatch('fetchParams');
      try {
        const res = await API.getMovieDetails(context.state.movieDetails.id);
        context.commit('setMovieDetails', res);
      } catch (err) {
        context.commit('setError', err.message);
      } finally {
        context.commit('toggleLoading');
        context.dispatch('setPageTitle');
      }
    },
  },
  getters: {},
  modules: {},
});
