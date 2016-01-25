<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      authorized: ''
    }
  },
  ready() {
    let token = localStorage.getItem(config.localstorage.token)
    if(token !== null && token !== "undefined") {
      this.$http
        .get(config.api.base + config.api.auth)
        .then((data) => {
          this.setSignIn(data.data)
        }, (err) => {
          this.destroySignIn()
        })
    }
  },
  methods: {
    setSignIn(user) {
      this.user = user
      this.authorized = true
      return this.$route.router.go({ name: 'home' })
    },
    destroySignIn() {
      this.user = null
      this.authorized = false
      localStorage.removeItem(config.localstorage.token)
      return this.$route.router.go({name: 'home' })
    }
  },
  events: {
    signout() {
      return this.destroySignIn()
    },
    signin(user) {
      return this.setSignIn(user)
    }
  }
}
</script>