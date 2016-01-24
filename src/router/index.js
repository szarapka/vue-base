module.exports = {
  configure: function (router) {

    router.map({
      '/': {
        component: require('../components/home/home.vue')
      },
      '*': {
        component: require('../components/pages/404.vue')
      }
    })
  }
}