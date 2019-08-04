import '@fortawesome/fontawesome-free/css/all.css'

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify,{
  iconfont: 'fa'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
