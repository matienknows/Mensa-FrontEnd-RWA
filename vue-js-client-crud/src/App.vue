<template>
  <div id="app">
    <img alt="Vue logo" src="src/assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/imports/bootstrap';

</style>
