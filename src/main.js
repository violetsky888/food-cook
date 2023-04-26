import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //引入axios
import VueAxios from 'vue-axios' //引入vue-axios
import '@/assets/reset.css'

Vue.use(VueAxios, axios) //使用vue-axios，并将axios绑定到Vue实例中，以后就可以全局调用$http了。


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

