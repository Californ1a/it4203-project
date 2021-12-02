import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
  path: '/movies/:type',
  name: 'Home',
  component: Home,
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to.name);
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
