<template>
  <h1>Your Profile</h1>
  <p>Hi {{$root.user.username}}!</p>
  <a v-link="{ name: 'home' }" v-if="$root.authorized">Go Home</a>
  <a v-link="{ name: 'signout' }" v-if="$root.authorized">Sign Out</a>
</template>