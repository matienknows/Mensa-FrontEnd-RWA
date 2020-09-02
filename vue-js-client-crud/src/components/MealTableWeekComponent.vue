<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="container">
      <button type="button" class="btn btn-outline-primary"  onclick="window.location.href= '/week/add' ">Primary</button>
      <button href="/weekly/add">Add Meal Table</button>
      <table class="table">
        <thead>
        <div class="form-group">
          <label for="weeks">Select Week</label>
          <select class="form-control" id="weeks" onchange="document.location.href = this.value">
            <option>1</option>
            <option select="2">2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
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

/*$(document).ready(function () {
  // On refresh check if there are values selected
  if (localStorage.selectVal) {
    // Select the value stored
    $('select').val(localStorage.selectVal);
  }
});

// On change store the value
$('select').on('change', function(){
  var currentVal = $(this).val();
  localStorage.setItem('selectVal', currentVal );
});*/

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