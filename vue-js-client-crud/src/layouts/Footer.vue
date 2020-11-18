<template>
  <footer class="page-footer fixed-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 footer-text">
          <h5>DAILY FRESH FOOD</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.page-footer {
  height: 10vh;
  width: 100%;
  background: rgb(219,3,123);
  background: linear-gradient(16deg, rgba(219,3,123,1) 0%, rgba(219,3,218,1) 81%);
  color: white;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  .footer-text {
    margin-top: 20px;
    text-align: center;
  }
}
</style>