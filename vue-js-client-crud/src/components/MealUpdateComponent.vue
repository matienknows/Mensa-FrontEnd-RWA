<template>
  <div class="container">
    <div>MealUpdateComponent</div>
    <form>
      <div class="text-center">
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
          <div class="form-group col-lg-2 offset-lg-5">
            <label>Price</label>
            <input type="text" id="price" step=".10" class="form-control" lang="en" v-model="meal.price">
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="form-row">
          <div class="form-group col-lg-4 offset-lg-4">
            <label>Name of Meal</label>
            <input type="text" id="name" class="form-control" v-model="meal.name">
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary" v-on:click="updateMealById">Update</button>
      </div>
    </form>
  </div>
</template>

<script>

import MealDataService from "@/service/MealDataService";

export default {
  name: "MealUpdateComponent",
  data() {
    return {
      meal: [],
    };
  },
  methods: {
    refreshMeal() {
      var id = this.$route.params.id
      alert(id);
      MealDataService.getMealById(id)
          .then(response => {
            this.meal = response.data;
            console.log(response);
          })
    },
    updateMealById() {
      console.log(this.meal.type)
      var data = {
        id: this.meal.id,
        name: this.meal.name,
        type: this.meal.type,
        price: this.meal.price
      };
      MealDataService.updateMealById(data)
          .then(response => {
            console.log(response.data);
          })
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped lang="scss">

#type, #price, #name {
  text-align: center;
}
</style>