import Vue from 'vue'
import App from './App.vue'

// components
import BaseButton from './components/ui/BaseButton';

Vue.component('base-button', { BaseButton });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
