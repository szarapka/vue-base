import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configure } from './router'

// Setup Config
window.config = require('./config')
Vue.config.debug = config.vue.debug

// Setup Vue-Router
Vue.use(VueRouter)
export let router = new VueRouter({
  // html5 history mode
  // http://vuejs.github.io/vue-router/en/options.html
  history: true
})
configure(router)

// Setup Vue-Resource
Vue.use(VueResource)
Vue.http.headers.common['Authorization'] = 'Bearer ' +
    localStorage.getItem(config.localstorage.token)
Vue.http.interceptors.push(function () {
  return {
    response: function (response) {
      // We should invalidate tokens on Unauthorized
      // except on the signout request.
      if(response.status === 401 && this.$route.name !== "signin") {
        return this.$dispatch("signout")
      }
      return response
    }
  }
})

// Bootstrap
const App = Vue.extend(require('./components/app.vue'))
router.start(App, '#app')