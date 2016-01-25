<template>
  <h1>Vue-Base</h1>
  <p>Hi Mom!</p>
  <a v-link="{ name: 'signin' }" v-if="!$root.authorized">Sign In</a>
  <a v-link="{ name: 'profile' }" v-if="$root.authorized">Your Profile</a>
  <a v-link="{ name: 'signout' }" v-if="$root.authorized">Sign Out</a>
</template>