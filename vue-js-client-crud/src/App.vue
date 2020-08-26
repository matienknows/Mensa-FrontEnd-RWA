<template>
  <div id="app">
    <Navigation></Navigation>
    <MealTableComponent></MealTableComponent>
    <Footer></Footer>
  </div>
</template>

<script>

import Navigation from "@/layouts/Navigation";
import Footer from "@/layouts/Footer";
import MealTableComponent from "@/components/MealTableComponent";

export default {
  name: 'App',
  components: {
    MealTableComponent,
    Footer,
    Navigation
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/imports/bootstrap';

</style>
