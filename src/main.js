import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueClipboard from 'v-clipboard'

Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps,{
  load: {
    key: 'AIzaSyC1OE5TMy42rVj4wjOXbyQSYNz7i6Hhe4c',
    libraries: 'places'

  }
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
