<script>
export default {
  route: {
    activate(transition) {
      this.$dispatch("signout")
    }
  }
}
</script>