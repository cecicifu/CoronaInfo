import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'

import twitter from 'vue-twitter'

// CSS/JS Libraries
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

Vue.use(twitter)

export const headers = {
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "ae6918fb94msh0af49f8ccaae469p1cc5f1jsn88544c534fd6"
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
