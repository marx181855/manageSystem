<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>