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
      title: 'Posts',
    },
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: PostView,
    // meta: {
    //   title: JSON.parse(localStorage.getItem('posts')).filter((post) => {
    //     if (post.id.toString() === this.$route.params.postId) {
    //       return post.title;
    //     }
    //   }),
    // },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
