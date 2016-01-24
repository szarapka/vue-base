import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configure } from './router'

// Setup Vue-Router
Vue.use(VueRouter)
export let router = new VueRouter()
configure(router)

// Setup Vue-Resource
Vue.use(VueResource)

// We need our config
window.config = require('./config')
Vue.config.debug = config.vue.debug

// Bootstrap
const App = Vue.extend(require('./components/app.vue'))
router.start(App, '#app')