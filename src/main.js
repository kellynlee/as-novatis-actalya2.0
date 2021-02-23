import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';
import router from './router/index';
import check from './icons/check';
import info from './icons/info';
import suggestion from './icons/suggestion';
import todo from './icons/todo';

Vue.config.productionTip = false
export default new Vuetify({
  icons: {
    values: {
      check: {
        component: check, // you can use string here if component is registered globally
      },
      info: {
        component: info
      },
      suggestion: {
        component: suggestion
      },
      todo: {
        component: todo
      }
    },
  },
})

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
