<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/layouts/Navigation";
import Footer from "@/layouts/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Navigation
  },
}
</script>

<style lang="scss">
@import 'src/assets/scss/imports/bootstrap';
@import 'src/assets/scss/imports/fonts';
@import 'src/assets/scss/imports/general';
</style>