export default {
  async getMovies(type, params) {
    if (!type) {
      return Promise.reject(new Error('List type is required'));
    }
    if (!type.match(/^(latest|now_playing|popular|top_rated|upcoming|search)$/)) {
      return Promise.reject(new Error('List type must be one of latest, now_playing, popular, top_rated, or upcoming'));
    }
    // console.log(type, params);
    if (type === 'search' && !params.query) {
      return Promise.reject(new Error('Query is required when type is search'));
    }
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = `${process.env.VUE_APP_API_KEY_V3}`;
    const options = {
      ...params,
      api_key: API_KEY,
    };
    if (type === 'search') {
      delete options.type;
    }
    const urlParams = new URLSearchParams(options);
    let url;
    if (type === 'search') {
      url = `${API_URL}/search/movie?${urlParams.toString()}`;
    } else {
      url = `${API_URL}/movie/${type}?${urlParams.toString()}`;
    }
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    const error = new Error(data.status_message || 'Something went wrong');
    error.response = data;
    throw error;
  },
};
