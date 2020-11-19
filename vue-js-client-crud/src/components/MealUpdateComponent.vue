<template>
  <section class="meal-update">
    <div class="container">
      <h1 class="page-title">Update a Meal</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <form>
        <div class="text-center">
          <div class="text-center">
            <div class="form-row">
              <div class="form-group col-lg-4 offset-lg-4">
                <label>Name of Meal</label>
                <input type="text" id="name" class="form-control" v-model="meal.name">
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
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="form-row">
            <div class="form-group col-lg-4 offset-lg-4">
              <label>Price</label>
              <input type="text" id="price" step=".10" class="form-control" lang="en" v-model="meal.price">
            </div>
          </div>
        </div>
      </form>
      <div class="button row justify-content-center">
        <button class="btn btn-outline-info col-6" v-on:click="updateMealById">Update</button>
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

export default {
  name: "MealUpdateComponent",
  data() {
    return {
      meal: [],
      alertFailed: 'Your changes failed.',
      alertSucces: 'Your changes were succesfully submitted.',
    };
  },
  methods: {
    refreshMeal() {
      var id = this.$route.params.id
      MealDataService.getMealById(id)
          .then(response => {
            this.meal = response.data;
          })
    },
    updateMealById() {
      var data = {
        id: this.meal.id,
        name: this.meal.name,
        type: this.meal.type,
        price: this.meal.price
      };
      MealDataService.updateMealById(data)
          .then(response => {
            console.log(response)
            document.getElementById("alert-failed").style.display = "none"
            document.getElementById("alert-succes").style.display = "block"
          })
          .catch(error => {
            console.log(error)
            document.getElementById("alert-succes").style.display = "none"
            document.getElementById("alert-failed").style.display = "block"
          })
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped lang="scss">

.page-title {
  margin: 35px 0 35px 0;
  text-align: center;
  color: #DB037B;
}

#type, #price, #name {
  text-align: center;
}

.button {
  margin: 30px 0px 30px 0px;
}

#alert-failed {
  margin: 30px 0px 30px 0px;
  display: none;
}

#alert-succes {
  margin: 30px 0px 30px 0px;
  display: none;
}
</style>