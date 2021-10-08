import Vue from 'vue';
import App from './App.vue';
import router from './router';

// components
import BaseButton from './components/ui/BaseButton';

Vue.component('base-button', BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
