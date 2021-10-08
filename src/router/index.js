import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import PostView from '../views/PostView';
import PostCards from '../views/PostCards';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Cards',
    component: PostCards,
    meta: {
      title: 'Blog',
    },
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: PostView,
    props: true,
    meta: {
      title: 'post-title',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
