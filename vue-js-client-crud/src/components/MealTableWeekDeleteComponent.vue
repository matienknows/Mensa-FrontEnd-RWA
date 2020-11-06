<template>
  <section class="meal-table-delete">
    <div class="container">
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <h3 class="title">Delete a Meal Table</h3>
      <div class="form-row text-center">
        <div class="form-group col-12">
          <label>Calendar Week</label>
          <select class="form-control" id="optionMenu" v-model="selectedMealTable"
                  @change="refreshMealTable(selectedMealTable)">
            <option value="" disabled selected>Select Calendar Week</option>
            <option v-for="weekMealTable in weekMealTables" v-bind:key="weekMealTable.id">
              {{ weekMealTable.id }}
            </option>
          </select>
        </div>
      </div>
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
      <div class="button row justify-content-center">
        <button class="btn btn-outline-danger col-6" v-on:click="removeMealTableWeek(selectedMealTable)">Delete</button>
      </div>
      <div class="button row justify-content-center">
        <button class="btn btn-outline-info col-6" v-on:click="goBack">Go Back</button>
      </div>
    </div>
  </section>
</template>

<script>

import MealTableDataService from "@/service/MealTableDataService";
import router from "@/router";

export default {
  name: "MealTableWeekDeleteComponent",
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
      amountWeekMealTables: '',
      selectedMealTable: '',

      alertFailed: 'Unfortunately the delete process faield',
      alertSucces: 'The choosen meal table was succesfully removed.',
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
          });
    },
    removeMealTableWeek(id) {
      MealTableDataService.deleteMealTableWeek(id)
          .then(response => {
            console.log(response)
            document.getElementById("alert-failed").style.display = "none"
            document.getElementById("alert-succes").style.display = "block"
            console.log("succes")
          })
          .catch(error => {
            console.log(error)
            document.getElementById("alert-succes").style.display = "none"
            document.getElementById("alert-failed").style.display = "block"
          })
    },
    goBack() {
      router.back()
    },
  },
  created() {
    this.refreshMealTable(1);
    this.retrieveWeekMealTables();
  }
};
</script>

<style scoped lang="scss">

.title {
  margin: 30px 0px 30px 0px;
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