export default {
  async getMovies(type) {
    if (!type) {
      return Promise.reject(new Error('type is required'));
    }
    if (!type.match(/^(latest|now_playing|popular|top_rated|upcoming)$/)) {
      return Promise.reject(new Error('type must be one of latest, now_playing, popular, top_rated, or upcoming'));
    }
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.VUE_APP_API_KEY_V3}`, {
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
