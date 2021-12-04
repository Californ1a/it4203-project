<template>
  <div class="container">
    <LoadOrError />
  </div>
  <div v-if="!error && !loading && credits" class="movie">
    <div class="movie-backdrop" :style="cssProps"></div>
    <div class="movie-content container">
      <div class="movie-main">
        <div class="movie-poster">
          <img :src="movie.poster" alt="">
          <div v-if="movie.tagline" class="movie-tagline">{{ movie.tagline }}</div>
        </div>
        <div class="movie-header">
          <h1 class="movie-title">{{ movie.title }}</h1>
          <div class="movie-rating">
            <span class="movie-rating-value" v-html="rating"></span>&nbsp;—&nbsp;
            <span class="movie-rating-label">{{ ratingLabel }}</span>
            <span class="movie-rating-count">&nbsp;
              <small>({{ movie.vote_count.toLocaleString() }} votes)</small>
            </span>
          </div>
          <h5>Overview</h5>
          <div class="movie-description">
            <p>{{ movie.overview }}</p>
          </div>
          <div class="extra-details">
            <div class="extra-details-item">
              <span class="extra-details-label">Release Date:</span>
              <span class="extra-details-value">{{ movie.release_date }}</span>
            </div>
            <div v-if="movie.homepage" class="extra-details-item">
              <span class="extra-details-label">Homepage:</span>
              <span class="extra-details-value"><a :href="movie.homepage" target="_blank">
                  {{ movie.homepage.match(/^https?:\/\/(www\.)?([^\/]+)/)[2] }}
                </a></span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">IMDB:</span>
              <span class="extra-details-value"><a :href="`https://imdb.com/title/${movie.imdb_id}`" target="_blank">
                  {{ movie.imdb_id }}
                </a></span>
            </div>
            <div v-if="movie.original_title !== movie.title" class="extra-details-item">
              <span class="extra-details-label">Original Title:</span>
              <span class="extra-details-value">{{ movie.original_title }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Runtime:</span>
              <span class="extra-details-value">{{ runtime }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Budget:</span>
              <span class="extra-details-value">{{ budget }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Revenue:</span>
              <span class="extra-details-value">{{ revenue }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Status:</span>
              <span class="extra-details-value">{{ movie.status }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Genres:</span>
              <span class="extra-details-value">{{ genres }}</span>
            </div>
            <div class="extra-details-item">
              <span class="extra-details-label">Countries:</span>
              <span class="extra-details-value">{{ countries }}</span>
            </div>
            <div class="extra-details-item companies">
              <span class="extra-details-label">Companies:</span>
              <span class="extra-details-value">{{ companies }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="movie-details">
        <div class="cast-and-crew">
          <CastOrCrew :type="'cast'" :list="credits?.cast" />
          <CastOrCrew :type="'crew'" :list="credits?.crew" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import LoadOrError from '@/components/LoadOrError.vue';
import CastOrCrew from '@/components/CastOrCrew.vue';

export default {
  components: {
    LoadOrError,
    CastOrCrew,
  },
  setup() {
    const store = useStore();

    store.dispatch('getMovieDetails');

    const movie = computed(() => store.state.movieDetails);

    function makeRating(rating, max) {
      const starRating = Math.round((rating / max) * 5);
      const halfstar = (starRating - Math.floor(starRating)) * 10;
      const stars = [];
      for (let i = 0; i < Math.floor(starRating); i += 1) {
        stars.push('<i class="material-icons">star</i>');
      }
      if (halfstar) {
        stars.push('<i class="material-icons">star_half</i>');
      }
      if (stars.length < 5) {
        for (let i = stars.length; i < 5; i += 1) {
          stars.push('<i class="material-icons">star_border</i>');
        }
      }
      return `<span title="${starRating} stars">${stars.join('')}</span>`;
    }

    function formatMoney(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    }

    function formatArray(arr) {
      if (!arr) return '';
      return arr.slice(0, 5).map((g) => {
        if (g.iso_3166_1) return g.iso_3166_1;
        return g.name;
      }).join(', ');
    }

    function formatRuntime(runtime) {
      if (!runtime) return '';
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;
      return `${hours}h ${minutes}m`;
    }

    return {
      movie: computed(() => movie.value.data),
      rating: computed(() => makeRating(movie.value.data.vote_average, 10)),
      ratingLabel: computed(() => `${movie.value.data.vote_average} / 10`),
      error: computed(() => store.state.error),
      loading: computed(() => store.state.loading),
      credits: computed(() => movie.value.data.credits),
      genres: computed(() => formatArray(movie.value.data.genres)),
      revenue: computed(() => formatMoney(movie.value.data.revenue)),
      budget: computed(() => formatMoney(movie.value.data.budget)),
      runtime: computed(() => formatRuntime(movie.value.data.runtime)),
      companies: computed(() => formatArray(movie.value.data.production_companies)),
      countries: computed(() => formatArray(movie.value.data.production_countries)),
    };
  },
  computed: {
    cssProps(context) {
      const backdrop = context.movie?.images?.backdrops?.[0]?.file_path;
      const backdropUrl = (backdrop) ? `https://image.tmdb.org/t/p/w1280${backdrop}` : 'none';
      return {
        '--movie-background-image': `url(${backdropUrl})`,
      };
    },
  },
};
</script>

<style scoped>
.movie {
  width: 100%;
  position: relative;
  text-align: center;
}

.movie-backdrop {
  margin: auto;
  background-image: var(--movie-background-image);
  background-size: 100%;
  width: 100%;
  background-repeat: no-repeat;
  height: 70vh;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
      from(rgba(0, 0, 0, 0.35)), to(rgba(0, 0, 0, 0)));
  mask-image: -webkit-gradient(linear, left top, left bottom,
      from(rgba(0, 0, 0, 0.35)), to(rgba(0, 0, 0, 0)));
}

.movie-content.container {
  color: white;
  text-shadow: 2px 1px 3px black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.movie-rating-value {
  cursor: default;
  user-select: none;
  margin-top: 2px;
}

.movie-rating {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.movie-header {
  text-align: left;
}

.movie-poster img {
  max-width: 250px;
}

.movie-main {
  display: flex;
  margin-top: 2.5rem;
  gap: 2rem;
}

.movie-title {
  margin: 0;
  text-shadow: 4px 4px 6px black;
}

.movie-details {
  width: 100%;
  text-align: left;
}

.cast-and-crew {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  gap: 3rem;
}

.extra-details {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
}

.extra-details-item {
  flex: 1 1 10rem;
}

.extra-details-item.companies {
  flex: 2 1 20rem;
}

.extra-details-label {
  font-weight: bold;
}

.extra-details span {
  display: block;
}

.movie-tagline {
  margin-top: 0.5rem;
  color: lightgrey;
  font-size: 0.9rem;
}
</style>
