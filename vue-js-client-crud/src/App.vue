<template>
  <div id="app">
    <Navigation></Navigation>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from "@/layouts/Navigation";
import Footer from "@/layouts/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Navigation,
    HelloWorld
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/imports/bootstrap';

</style>
