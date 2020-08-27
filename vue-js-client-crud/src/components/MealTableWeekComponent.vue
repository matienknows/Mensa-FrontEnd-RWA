<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th>Meal</th>
          <th>Type</th>
          <th>Price in $</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="d in mealTables.mealTableWeek" v-bind:key="d.id">
          <th scope="row">{{mealTables.mealTableWeek[1]}}</th>
          <td>{{d.name}}</td>
          <td>{{d.type}}</td>
          <td>{{d.price}}</td>
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
          name: {
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