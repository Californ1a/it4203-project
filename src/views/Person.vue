<template>
  <div class="container">
    <LoadOrError />
  </div>
  <div v-if="!error && !loading" class="outer-container">
    <div class="container inner">
      <!-- <div class="person-main"> -->
      <div class="person-poster">
        <img :src="avatar" alt="">
      </div>
      <div class="person-header">
        <h1 class="person-title">{{title}}</h1>
        <span class="person-birthday" v-if="birthday">
          <small>Born:</small> {{birthday}}
          <span v-if="person.place_of_birth" class="birthplace">
            <small>in</small> {{person.place_of_birth}}
          </span>
        </span>
        <span v-else>Unknown birthday</span>
        <h5>Biography</h5>
        <div class="person-description" v-if="person.biography">
          <p>{{ person.biography }}</p>
        </div>
        <p v-else>No biography available</p>
        <div class="extra-details">
          <div v-if="person.id" class="extra-details-item">
            <div class="detail-item-wrapper">
              <span class="extra-details-label">TMDB:</span>
              <span class="extra-details-value"><a :href="`https://www.themoviedb.org/person/${person.id}`" target="_blank">
                  {{ person.id }}
                </a></span>
            </div>
          </div>
          <div v-if="person.external_ids?.imdb_id" class="extra-details-item">
            <div class="detail-item-wrapper">
              <span class="extra-details-label">IMDB:</span>
              <span class="extra-details-value"><a :href="`https://imdb.com/title/${person.external_ids?.imdb_id}`" target="_blank">
                  {{ person.external_ids?.imdb_id }}
                </a></span>
            </div>
          </div>
          <div v-if="person.external_ids?.instagram_id" class="extra-details-item">
            <div class="detail-item-wrapper">
              <span class="extra-details-label">Instagram:</span>
              <span class="extra-details-value"><a :href="`https://www.instagram.com/${person.external_ids?.instagram_id}`" target="_blank">
                  {{ person.external_ids?.instagram_id }}
                </a></span>
            </div>
          </div>
          <div v-if="person.external_ids?.twitter_id" class="extra-details-item">
            <div class="detail-item-wrapper">
              <span class="extra-details-label">Twitter:</span>
              <span class="extra-details-value"><a :href="`https://www.instagram.com/${person.external_ids?.twitter_id}`" target="_blank">
                  {{ person.external_ids?.twitter_id }}
                </a></span>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div class="aka">
        <h5>Also Known As</h5>
        <ul v-if="person.also_known_as?.[0]">
          <li v-for="(aka, i) in person.also_known_as" :key="i">{{ aka }}</li>
        </ul>
        <p v-else>No other names</p>
      </div>
      <div class="person-photos">
        <h5>Photos</h5>
        <ul v-if="person.images?.profiles?.[0]">
          <li v-for="(image, i) in person.images?.profiles" :key="i">
            <img :ref="setItemRef" class="materialboxed" v-if="i <= 18"
              :src="`https://image.tmdb.org/t/p/h632${image.file_path}`" width="95" alt="" />
          </li>
          <li class="spacer"></li>
        </ul>
        <p v-else>No photos</p>
      </div>
    </div>
    <!-- <div class="second-row"> -->

    <!-- </div> -->
    <div class="container movie">
      <div class="person-movies">
        <h5>Movies</h5>
        <div class="main-content">
          <div class="main-main">
            <div class="movie-list grid_on" v-if="cast?.[0]">
              <MovieCard v-for="movie in cast" :movie="movie" :key="movie.id" :layout="'grid_on'" />
            </div>
            <p v-else>No movies</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {
  computed,
  watch,
  ref,
  onBeforeUpdate,
  onUpdated,
} from 'vue';

import LoadOrError from '@/components/LoadOrError.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    LoadOrError,
    MovieCard,
  },
  setup() {
    const store = useStore();
    const imageList = ref('');

    store.dispatch('getPersonDetails');

    const person = computed(() => store.state.personDetails);

    const id = computed(() => store.state.route.params.id);

    watch(id, (newId) => {
      if (!newId || store.state.route.name !== 'Person') return;
      store.dispatch('getPersonDetails');
    });

    let itemRefs = [];
    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });
    onUpdated(() => {
      M.AutoInit();
    });

    const birthday = computed(() => {
      if (!person.value?.data?.birthday) return '';
      const date = new Date(person.value.data.birthday);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
      return formattedDate;
    });

    return {
      imageList,
      person: computed(() => store.state.personDetails.data),
      avatar: computed(() => person.value.data.avatar),
      title: computed(() => person.value.data.name),
      cast: computed(() => person.value.data.movie_credits?.cast),
      error: computed(() => store.state.error),
      loading: computed(() => store.state.loading),
      birthday,
      setItemRef,
    };
  },
};
</script>

<style>
.container.inner {
  color: white;
  width: 90%;
  margin-top: 2.5rem;
  text-shadow: 2px 1px 3px black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.container.movie {
  color: white;
  width: 90%;
}

/* .person-main {
  display: flex;
  flex-direction: row;
  text-shadow: 2px 1px 3px black;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;
} */

.person-poster img {
  max-width: min(18vw, 300px);
  min-width: max(18vw, 180px);
}

.person-poster {
  flex-basis: max(18vw, 180px);
}

.person-header {
  /* prevent need for @media */
  flex: 1;
  flex-basis: min(49vw, 60%);
}

.person-title {
  margin: 0;
  text-shadow: 4px 4px 6px black;
}

.aka {
  min-width: calc(max(18vw, 180px) + 2rem);
}

.aka ul li {
  list-style: inside;
  padding: 0;
  margin: 0;
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

.detail-item-wrapper {
  width: fit-content;
  margin: auto;
}

.extra-details-item.companies {
  flex: 2 1 20rem;
}

.extra-details-label {
  font-weight: bold;
}

.extra-details span {
  display: flex;
  width: fit-content;
}

.person-photos {
  flex: 1 1 50vw;
}

.person-photos ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
}

.person-photos ul li:last-child {
  flex: 1 1 0px;
}

.person-description p {
  max-height: 6rem;
  overflow-y: scroll;
  background-color: #534B6280;
  padding: 10px 15px;
}

.person-photos ul li img {
  max-width: 100px;
  width: 7vw;
  min-width: 80px;
}

.person-movies {
  margin-top: 3rem;
}

.main-content .main-main .movie-list {
  margin-bottom: 3rem;
}

.movie-list {
  flex: 1;
}

#materialbox-overlay {
  background-color: rgba(20, 20, 20, 0.9);
}
</style>
