// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Vuetify from 'vuetify'
import VueClipboard from 'vue-clipboard2'
import VueParticles from 'vue-particles'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Vuetify, {
  iconfont: 'mdi' || 'fa4' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(VueParticles)

/* eslint-disable no-new */
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
