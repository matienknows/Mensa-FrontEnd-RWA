<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="form-group">
      <select class="form-control" id="optionMenu" v-model="selectedMealTable" @change="refreshMealTable(selectedMealTable)">
        <option value="" disabled selected>Select Calendar Week</option>
        <option v-for="weekMealTable in weekMealTables" v-bind:key="weekMealTable.id">
          {{weekMealTable.id }}
        </option>
      </select>
    </div>
    <h4>Calendar Week: {{ selectedMealTable }}</h4>
    <div class="table-responsive">
      <table class="table">
        <thead>
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
    <router-link type="button" class="btn btn-outline-warning add-button" to="/mealtable/update" tag="button">Update Meal Table</router-link>
    <router-link type="button" class="btn btn-outline-info add-button" to="/mealtable/add" tag="button">Add Meal Table</router-link>
    <router-link type="button" class="btn btn-outline-danger add-button" to="/mealtable/add" tag="button">Delete Meal Table</router-link>
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
        calendarWeek: "",
        mealTableWeek: {
          day: {
            id: " ",
            name: " ",
            type: " ",
            price: " "
          }
        }
      },
      weekMealTables: [],
      amountWeekMealTables:'',
      selectedMealTable: '',
    };
  },
  methods: {
    refreshMealTable(id) {
      MealTableDataService.retrieveMealTableById(id)
          .then(response => {
            this.mealTables = response.data;
          });
    },
    retrieveWeekMealTables() {
      MealTableDataService.retrieveAllMeatTables()
          .then(response => {
            this.weekMealTables = response.data;
            this.amountWeekMealTables=(this.weekMealTables.length)+1;
            this.$store.commit("setAmountWeekMealTables", {
              newAmount: this.amountWeekMealTables,
            });
          });
    },
  },
  created() {
    this.refreshMealTable(1);
    this.retrieveWeekMealTables();
  }
};
</script>

<style scoped lang="scss">

.add-button {
  margin: 30px 5px 10px 5px;
}
</style>