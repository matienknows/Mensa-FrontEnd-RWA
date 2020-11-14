<template>
  <footer class="container-fluid">
      <nav class="navbar fixed-bottom">
          <div class="text justify-content-center">
              DAILY FRESH FOOD
          </div>
      </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">


$footer-height: 10vh;
$footer-height-sm: 10vh;

.text {
  text-align: center;
  color: white;
}
.navbar {
  background-color: #DB037B;
  height: $footer-height;
}
</style>