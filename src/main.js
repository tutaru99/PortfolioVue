import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import vueSmoothScroll from 'vue2-smooth-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './stylus/main.styl'

Vue.use(vueSmoothScroll)


Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
