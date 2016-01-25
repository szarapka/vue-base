module.exports = {
  configure: function (router) {

    router.map({
      '/': {
        name: 'home',
        component: require("../components/home/home.vue")
      },
      '/profile': {
        name: 'profile',
        component: require("../components/profile/profile.vue"),
        auth: true
      },
      '/signin': {
        name: 'signin',
        component: require("../components/auth/signin.vue"),
        guest: true
      },
      '/signout': {
        name: 'signout',
        component: require("../components/auth/signout.vue"),
        auth: true
      },
      '*': {
        component: require("../components/pages/404.vue")
      }
    })

    router.beforeEach(function (transition) {
      let token = localStorage.getItem(config.localstorage.token)
      if (transition.to.auth) {
        if (!token || token === null)
          return transition.redirect({ name: 'signin' })
      }
      if (transition.to.guest) {
        if (token)
          return transition.redirect({ name: 'home' })
      }
      transition.next()
    })
  }
}