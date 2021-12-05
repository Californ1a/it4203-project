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
    avatar: (movie.profile_path) ? `https://image.tmdb.org/t/p/h632${movie.profile_path}` : '',
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
    searchList: {
      data: [],
    },
    personDetails: {
      data: {
        name: '',
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
      state.movieDetails.data = formatMovieData(payload);
    },
    setMovieDetailsId(state, payload) {
      state.movieDetails.id = payload;
    },
    setSearchList(state, payload) {
      state.searchList.data = formatMovieData(payload.results);
    },
    setPersonDetails(state, payload) {
      state.personDetails.data = formatMovieData(payload);
    },
    setPersonDetailsId(state, payload) {
      state.personDetails.id = payload;
    },
    setPersonMovieCredits(state, payload) {
      state.personDetails.data.movie_credits = {
        cast: formatMovieData(payload.cast),
        crew: formatMovieData(payload.crew),
      };
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
      switch (context.state.route.name) {
        case 'Home':
          context.commit('setMovieListParams', context.state.route.params);
          break;
        case 'Movie':
          context.commit('setMovieDetailsId', context.state.route.params.id);
          break;
        case 'Person':
          context.commit('setPersonDetailsId', context.state.route.params.id);
          break;
        default:
      }
    },
    changeLayout(context) {
      const payload = (context.state.movieList.layout === 'grid_off') ? 'grid_on' : 'grid_off';
      context.commit('setMovieListLayout', payload);
    },
    async changeType(context, payload) {
      context.commit('setMovieListType', payload);
      await context.dispatch('getMovies');
    },
    setPageTitle(context) {
      switch (context.state.route.name) {
        case 'Home':
          if (context.state.movieList.params.type !== 'search') {
            const prettyType = context.state.movieList.params.type.replace('_', ' ')
              .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
            context.commit('setPageTitle', `${prettyType} Movies | Movie App`);
          } else {
            const ellipsis = (context.state.movieList.params.query.length > 20) ? '...' : '';
            context.commit('setPageTitle', `Search: ${context.state.movieList.params.query}${ellipsis} | Movie App`);
          }
          break;
        case 'Movie':
          context.commit('setPageTitle', `${context.state.movieDetails.data.title} | Movie App`);
          break;
        case 'Person':
          context.commit('setPageTitle', `${context.state.personDetails.data.name} | Movie App`);
          break;
        default:
          context.commit('setPageTitle', 'Movie App');
          break;
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
    async getSearchSuggestions(context, payload) {
      try {
        const res = await API.getMovies('search', {
          query: payload,
        });
        context.commit('setSearchList', res);
      } catch (err) {
        context.commit('setError', err.message);
      }
    },
    async getPersonDetails(context) {
      context.commit('toggleLoading');
      context.dispatch('fetchParams');
      try {
        const res = await API.getPersonDetails(context.state.personDetails.id);
        context.commit('setPersonDetails', res);
        context.dispatch('formatMovieCredits');
        console.log(res);
      } catch (err) {
        context.commit('setError', err.message);
      } finally {
        context.commit('toggleLoading');
        context.dispatch('setPageTitle');
      }
    },
    formatMovieCredits(context) {
      const credits = context.state.personDetails.data.movie_credits;
      context.commit('setPersonMovieCredits', credits);
    },
  },
  getters: {},
  modules: {},
});
