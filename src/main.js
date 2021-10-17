import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex);

// components
import BaseButton from './components/ui/BaseButton';
import FormInput from './components/ui/FormInput';
import TextArea from './components/ui/TextArea';

Vue.component('base-button', BaseButton);
Vue.component('form-input', FormInput);
Vue.component('text-area', TextArea);

Vue.config.productionTip = false;

new Vue({
 router,
 render: (h) => h(App),
}).$mount('#app');
