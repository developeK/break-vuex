import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: () => import(/* webpackChunkName: "HOME" */ '@/views/Home.vue'),
  },
  {
    path: '/book',
    name: 'BOOK',
    component: () =>
      import(/* webpackChunkName: "BOOK" */ '@/views/book/index.vue'),
  },
  {
    path: '/book/author',
    name: 'BOOK_AUTHOR',
    component: () =>
      import(/* webpackChunkName: "BOOK_AUTHOR" */ '@/views/book/Author.vue'),
  },
  {
    path: '/user',
    name: 'USER',
    component: () =>
      import(/* webpackChunkName: "USER" */ '@/views/user/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
