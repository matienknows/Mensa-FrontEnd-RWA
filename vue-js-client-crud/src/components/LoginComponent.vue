<template>
  <section class="login">
    <div class="container">
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <div class="login-logo text-center">
        <img class="user" src="../../src/assets/images/user.svg" alt="user">
      </div>
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
    </div>
  </section>
</template>

<script>
import AuthenticationService from "@/service/AuthenticationService";

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      alertFailed: 'Your typed data is invalid. Please check your input',
      hasLoginFailed: false,
    };
  },
  methods: {
    proveAuthenticaiton() {
      AuthenticationService.startAuthentication(this.username, this.password)
          .then(() => {
            if (this.username === 'admin') {
              this.$store.commit('setUserStatus', 'admin')
            } else if (this.username === 'user') {
              this.$store.commit('setUserStatus', 'user')
            }
            AuthenticationService.registerSuccesfulLogin(this.username, this.password)
            this.$router.replace({name: 'meal'})
          })
          .catch(() => {
            document.getElementById("alert-failed").style.display = "block"
            localStorage.removeItem('token');
          })
    }
  },
}
</script>
<style scoped lang="scss">

.login-logo {
  margin: 45px 0 45px 0;
  img {
    width: 25px;
  }
}

#alert-failed {
  margin: 30px 0px 30px 0px;
  display: none;
}

</style>
