<template>
  <form>
    <div class="form-group col-lg-4 offset-lg-4 text-center">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter username">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group col-lg-4 offset-lg-4 text-center">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
    </div>
    <div class="button row justify-content-center">
      <button type="button" class="btn btn-outline-info col-6" v-on:click="proveAuthenticaiton" tag="button">
        Login
      </button>
    </div>
  </form>
</template>

<script>
import AuthenticationService from "@/service/AuthenticationService";

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      alertFailed: 'The created meal could not be added.',
      alertSucces: false,
      hasLoginFailed: false,
    };
  },
  methods: {
    proveAuthenticaiton() {
      console.log("Login:proveAuthenticaiton", this.username, this.password)
      AuthenticationService.startAuthentication(this.username, this.password)
          .then(() => {
            console.log("executed")
            this.$store.commit('setUserStatus', true)
            console.log("safed user date in store")
            AuthenticationService.registerSuccesfulLogin(this.username, this.password)
            this.$store.commit("setUserStatus", {
              newStatus: true
            });
            this.$router.replace({name: 'meal'})
          })
          .catch(() => {
            console.log("failed")
          })
    }
  }
}
</script>


<style scoped lang="scss">
</style>
