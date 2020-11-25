<template>
  <section class="pageNotFound">
    <div class="container">
      <div class="message text-center">
        <h1>404 Error</h1>
        <h2>This page does not exist. :/</h2>
        <b-button class="modal-button" variant="outline-info"  to="/home">
         Home
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNotFoundComponent"
}
</script>

<style scoped lang="scss">
 h1 {
   color: #DB037B;
 }

 .btn {
   margin-top: 25px;
 }

 .message {
   position: absolute;
   top: 38%;
   left: 50%;
   transform: translate(-50%, -50%);
 }
</style>