<template>
  <h1>Sign In</h1>
  <div id="alerts" v-if="messages.length > 0">
    <div v-for="message in messages" track-by="$index">
      <p>{{message}}</p>
    </div>
  </div>
  <form v-on:submit="signIn">
    <input type="text" name="username" placeholder="Username" v-model="user.username">
    <input type="password" name="password" placeholder="Password" v-model="user.password">
    <button type="submit">Sign In</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      messages: []
    }
  },
  ready() {

  },
  methods: {
    signIn(e) {
      e.preventDefault()
      let data = this.user
      this.$http.post(config.api.base + config.api.auth, data)
        .then((resp) => {
          console.log(resp)
          localStorage.setItem(config.localstorage.token, resp.data.token)
          this.$dispatch("signin", resp.data.user)
          return this.$route.router.go({ name: 'home' })
        }, (err) => {
          this.messages.push(err.statusText)
        })
    }
  }
}
</script>