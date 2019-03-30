import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import { Icon } from 'vant';


const eventBus = new Vue();

Vue.config.productionTip = false
Vue.prototype.$eventBus = eventBus
Vue.use(Vant)
Vue.use(Icon)
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
