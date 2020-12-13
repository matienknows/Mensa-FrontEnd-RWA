<template>
  <section clas="userProfile">
    <div class="container">
      <h1>Hello User</h1>
      <div class="row">
        <div class="col-lg-3">
          <img class="profile-img" src="../assets/images/user_profile.png" alt="profile-picture">
        </div>
      </div>
      <div class="row">
        <div class="col-12 user-data">
          <div>E-Mail: s.msuterfrau@stud.leuphana.de</div>
          <div>Matrikelnummer: 3030506</div>
          <div>Lg-Nummer: lg071227</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserProfileComponent"
}
</script>

<style scoped lang="scss">

.profile-img {
  margin: 25px 0 60px 0;
  max-width: 10vh;
}

</style>