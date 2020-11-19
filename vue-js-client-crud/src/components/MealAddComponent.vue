<template>
  <section class="meal-add">
    <div class="container">
      <h1 class="page-title">Add a Meal</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="text-center" id="alert-redirect">{{ alertRedirect }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <form>
        <div class="text-center">
          <div class="text-center">
            <div class="form-row">
              <div class="form-group col-lg-4 offset-lg-4">
                <label>Name of Meal</label>
                <input type="text" id="name" class="form-control" v-model="meal.name">
                <small id="nameErrorMsg" class="form-text text-muted">Please type a meal.</small>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-lg-4 offset-lg-4">
              <label>Type of the Meal</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="type">Options</label>
                </div>
                <select class="custom-select" id="type" v-model="meal.type">
                  <option selected>Choose...</option>
                  <option value='fleischhaltig'>fleischhaltig</option>
                  <option value="vegetarisch">vegetarisch</option>
                  <option value="vegan">vegan</option>
                </select>
              </div>
              <small id="typeErrorMsg" class="form-text text-muted">Please select a type.</small>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="form-row">
            <div class="form-group col-lg-4 offset-lg-4">
              <label>Price</label>
              <input type="text" id="price" step=".10" class="form-control" lang="en" v-model="meal.price">
              <small id="priceErrorMsg" class="form-text text-muted">Please consider a price.</small>
            </div>
          </div>
        </div>
      </form>
      <div class="button row justify-content-center">
        <button class="btn btn-outline-warning col-6" v-on:click="postMealById">Add</button>
      </div>
      <div class="button row justify-content-center">
        <router-link type="button" class="btn btn-outline-info col-6" to="/meal" tag="button">
          Go Back
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>

import MealDataService from "@/service/MealDataService";
import router from "@/router";

export default {
  name: "MealAddComponent",

  data() {
    return {
      meal: [],
      alertFailed: 'The created meal could not be added.',
      alertSucces: 'Your created meal was succesfully added.',
      alertRedirect: 'You will be automatically redirected.',
      errorMessage: false
    };
  },
  methods: {
    checkForm: function () {
      if (!this.meal.name) {
        document.getElementById("nameErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("nameErrorMsg").style.display = "none"
      }
      if (!this.meal.type) {
        document.getElementById("typeErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("typeErrorMsg").style.display = "none"
      }
      if (!this.meal.price) {
        document.getElementById("priceErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("priceErrorMsg").style.display = "none"
      }
    },
    postMealById() {
      this.checkForm()

      if (this.errorMessage) {
        this.errorMessage = false
        return;
      }

      var data = {
        name: this.meal.name,
        type: this.meal.type,
        price: this.meal.price
      };
      MealDataService.addMealById(data)
          .then(response => {
            console.log(response)
            document.getElementById("alert-failed").style.display = "none"
            document.getElementById("alert-succes").style.display = "block"
            document.getElementById("alert-redirect").style.display = "block"
            setTimeout(this.goToMealComponent, 2000);
          })
          .catch(error => {
            console.log(error)
            document.getElementById("alert-redirect").style.display = "none"
            document.getElementById("alert-succes").style.display = "none"
            document.getElementById("alert-failed").style.display = "block"
          })
    },
    goToMealComponent() {
      router.push({path: '/meal'})
    }
  },
  created() {

  }
}
</script>

<style scoped lang="scss">

.page-title {
  margin: 35px 0 35px 0;
  text-align: center;
  color: #DB037B;
}

.button {
  margin: 30px 0px 30px 0px;
}

#type, #price, #name {
  text-align: center;
}

#alert-failed {
  margin: 30px 0px 30px 0px;
  display: none;
}

#alert-succes {
  margin: 30px 0px 30px 0px;
  display: none;
}

#alert-redirect {
  margin: 30px 0px 30px 0px;
  display: none;
  color: forestgreen;
}

#nameErrorMsg {
  display: none;
  color: red !important;
}

#typeErrorMsg {
  display: none;
  color: red !important;
}

#priceErrorMsg {
  display: none;
  color: red !important;
}
</style>