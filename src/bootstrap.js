import Vue from 'vue'
import VueRouter from 'vue-router'
import { configure } from './router'

Vue.use(VueRouter)
export let router = new VueRouter()
configure(router)

// We ned our config
window.config = require('./config')
Vue.config.debug = config.vue.debug

// Bootstrap
const App = Vue.extend(require('./components/app.vue'))
router.start(App, '#app')