<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="container">
      <router-link type="button" class="btn btn-outline-primary" to="/mealtable/add" tag="button">Add Meal Table</router-link>
      <table class="table">
        <thead>
        <div class="form-group">
          <label for="weeks">Select Week</label>
          <select class="form-control" id="weeks" onchange="document.location.href = this.value">
            <option disabled="disabled" selected>Please choose a week!</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <h4>Calendar Week: {{ $route.params.id }}</h4>
        <tr>
          <th scope="col">Day</th>
          <th>Meal</th>
          <th>Type</th>
          <th>Price ($)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(meal, key) in mealTables.mealTableWeek" v-bind:key="meal.id">
          <td>{{ key }}</td>
          <td>{{ meal.name }}</td>
          <td>{{ meal.type }}</td>
          <td>{{ meal.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MealTableDataService from "@/service/MealTableDataService";


export default {
  name: "MealTableWeekComponent",
  data() {
    return {
      mealTables: {
        id: " ",
        mealTableWeek: {
          day: {
            id: " ",
            name: " ",
            type: " ",
            price: " "
          }
        }
      }
    };
  },

  methods: {
    refreshMealTable() {
      const id = this.$route.params.id;
      MealTableDataService.retrieveMealTableById(id)
          .then(response => {
            console.log(response)
            this.mealTables = response.data;
          });
    }
  },
  created() {
    this.refreshMealTable();

  }
};
</script>

<style scoped lang="scss">

</style>