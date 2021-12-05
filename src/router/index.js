import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Movie from '@/views/Movie.vue';
import Person from '@/views/Person.vue';

const routes = [{
  path: '/movie/:id',
  name: 'Movie',
  component: Movie,
}, {
  path: '/person/:id',
  name: 'Person',
  component: Person,
}, {
  path: '/movies/:type/:query?',
  name: 'Home',
  component: Home,
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.name) {
    next({
      name: 'Home',
      params: {
        type: 'popular',
      },
    });
  } else {
    next();
  }
});

export default router;
