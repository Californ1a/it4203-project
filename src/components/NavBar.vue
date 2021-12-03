<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue darken-3">
        <a href="#!" class="brand-logo">IT4203 Project</a>
        <form @submit.prevent="updateMovies">
          <div class="input-field blue darken-1">
            <input v-model="searchTerm" ref="searchRef" id="search"
              type="search" class="autocomplete" autocomplete="off" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">
              <i class="material-icons left">search</i>Link with Left Icon</a></li>
          <li><a href="badges.html">
              <i class="material-icons right">view_module</i>Link with Right Icon</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';

import API from '@/lib/API';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const searchRef = ref('');
    const searchTerm = ref('');
    let instance;
    let debounceTimeout;

    onMounted(() => {
      instance = M.Autocomplete.init(searchRef.value, {
        data: {},
        onAutocomplete(val) {
          console.log(val);
          // TODO: go to details page
          router.push({
            name: 'Home',
            params: {
              type: 'search',
              query: val,
            },
          });
        },
      });
      async function getResults() {
        if (searchTerm.value.length < 2) return;
        const res = await API.getMovies('search', {
          query: searchTerm.value,
        });
        console.log(res.results);

        function poster(movie) {
          return (movie.poster_path) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/50x50';
        }
        const results = res.results.reduce((acc, movie) => {
          if (movie.original_title && movie.title) {
            if (movie.original_title === movie.title) {
              acc[movie.title] = poster(movie);
              return acc;
            }
            acc[`${movie.title} (${movie.original_title})`] = poster(movie);
            return acc;
          }
          if (movie.original_title) {
            acc[movie.original_title] = poster(movie);
            return acc;
          }
          if (movie.title) {
            acc[movie.title] = poster(movie);
            return acc;
          }
          return acc;
        }, {});
        instance.updateData(results);
        instance.open();
      }
      watch(() => searchTerm.value, () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          getResults();
        }, 500);
      });
    });

    const updateMovies = async () => {
      clearTimeout(debounceTimeout);
      // console.log(searchTerm.value);
      await router.push({
        name: 'Home',
        params: {
          type: 'search',
          query: searchTerm.value,
        },
      });
      await store.dispatch('getMovies');
      if (instance) {
        instance.close();
      }
      if (searchRef.value) {
        searchRef.value.blur();
      }
    };

    return {
      searchRef,
      searchTerm,
      updateMovies,
    };
  },
};
</script>

<style scoped>
nav .nav-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav .brand-logo {
  position: inherit;
}

.nav-wrapper .input-field input[type=search] {
  width: calc(100vw - 50rem);
  min-width: 10rem;
}

nav form {
  line-height: 50px;
  height: 80%;
}

nav form i,
nav form i.material-icons {
  line-height: 50px;
}

@media only screen and (min-width: 601px) {
  nav .nav-wrapper form i {
    line-height: 55px;
  }
}

@media only screen and (max-width: 992px) {
  nav .brand-logo {
    left: 10%;
  }

  .hide-on-med-and-down {
    display: initial;
  }
}

nav .input-field label {
  left: 1rem;
  transform: none;
}

.input-field input[type=search]:focus:not(.browser-default)+ul+label i {
  color: #444;
}

.input-field input[type=search]:focus:not(.browser-default) {
  color: #444;
}

.input-field input[type=search] {
  color: #eee;
}
</style>
