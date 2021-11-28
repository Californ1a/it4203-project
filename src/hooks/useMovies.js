import { reactive, watch } from 'vue';
import API from '@/lib/API';

export default function useMovies(type) {
  const moviesState = reactive({
    loading: false,
    error: '',
    data: [],
  });

  async function loadData() {
    try {
      moviesState.loading = true;
      moviesState.error = '';
      moviesState.data = [];

      const response = await API.getMovies(type);
      moviesState.data = response.results;
    } catch (err) {
      moviesState.error = err.message || 'Something went wrong';
    } finally {
      moviesState.loading = false;
    }
  }

  watch(() => type, loadData, { immediate: true });

  return moviesState;
}
