import Vue from 'vue';
import VueRouter from 'vue-router';
import PostView from '../views/PostView';
import PostCards from '../views/PostCards';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Cards',
    component: PostCards
  },
  {
    path: '/post',
    name: 'Post',
    component: PostView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;