<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th>Meal Table Number</th>
          <th>Calendar Week</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mealTable in mealTables" v-bind:key="mealTable.id">
          <td>{{ mealTable.id }}</td>
          <td>{{ mealTable.calendarWeek }}</td>
          <td>{{ mealTable.mealTableWeek }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MealTableDataService from "../service/MealTableDataService";

export default {
  name: "MealTableComponent",
  data() {
    return {
      mealTables: {
        id: " ",
        calendarWeek: " ",
        mealTableWeek:" "
      }
    };
  },
  methods: {
    refreshMealTable() {
      MealTableDataService.retrieveAllMeatTables()
          .then(response => {
            this.mealTables = response.data;
          });
    }
  },
  created() {
    this.refreshMealTable();
  }
};
</script>

<style scoped>

</style>