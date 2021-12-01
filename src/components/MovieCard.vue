<template>
  <div class="movie-card">
    <div class="card sticky-action hoverable movie">
      <div v-if="isImage" class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="movie.poster" />
      </div>
      <div class="card-content white-text">
        <span class="card-title activator">{{movie.title}}</span>
      </div>
      <div class="card-action">
        <a :href="`https://www.themoviedb.org/movie/${movie.id}`">TMDB</a>
      </div>
      <div class="card-reveal">
        <span class="card-title white-text">{{movie.title}}
          <i class="material-icons right">close</i></span>
        <p>{{movie.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    movie: Object,
  },
  setup(props) {
    const isImage = computed(() => props.movie.poster.match(/\.(jpeg|jpg|gif|png)$/) != null);
    return {
      isImage,
    };
  },
};
</script>

<style scoped>
  .movie-card img {
    width: 220px;
    margin: auto;
  }

  .movie-card {
    flex: 1;
  }

  .movie {
    width: 220px;
    margin: auto;
    background-color: #534B62;
  }

  .card .card-title {
    font-size: 1.1rem;
  }

  .card-reveal .card-title {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #534B62;
    padding: 20px 10px 20px 15px;
  }

  .card-reveal {
    padding: 0;
  }

  .card-reveal p {
    margin-top: 0;
    padding: 10px 24px;
  }

  .hoverable:hover {
    box-shadow: 0 8px 17px 0 rgba(255, 255, 255, 0.1), 0 6px 20px 0 rgba(255, 255, 255, 0.09)
  }
</style>
