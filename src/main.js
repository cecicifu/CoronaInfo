import Vue from 'vue'
import App from './App.vue'
import router from './router'

// CUSTOM COMPONENTS
import twitter from 'vue-twitter'

// CSS/JS Libraries
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(twitter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
