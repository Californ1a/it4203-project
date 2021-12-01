import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
  path: '/:type',
  name: 'Home',
  component: Home,
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home') {
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
