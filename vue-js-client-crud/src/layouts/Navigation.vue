<template>
  <header class="page-header">
    <div>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand href="/home">FOOD</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/weekly">Meal-Tables</b-nav-item>
            <b-nav-item to="/meal">Meal-List</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
            </b-nav-form>
            <b-nav-item to="/login" right>
              <img class="user" src="../../src/assets/images/user.svg" alt="user">
            </b-nav-item>
            <b-nav-item v-if="checkUser == 'admin'|| checkUser == 'user' " href="/logout" v-on:click="userLogout">
              Logout
            </b-nav-item>
            <!--<b-nav-item-dropdown right>
              <template #button-content>
               <img class="trash-can" src="../../src/assets/images/user.svg" alt="user">
              </template>
              <b-dropdown-item href="/admin">Profile</b-dropdown-item>
              <b-dropdown-item href="/home">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import AuthenticationService from "@/service/AuthenticationService";

export default {
  name: "Navigation",

  methods: {
    userLogout() {
      AuthenticationService.logout()
    }
  },

  computed: {
    checkUser: function () {
      if (this.$store.state.userStatus == 'admin') {
        return 'admin';
      } else if (this.$store.state.userStatus == 'user') {
        return 'user';
      }
      return false;
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-brand {
  color: #DB037B !important;
}

.nav-link {
  color: grey;
}

</style>