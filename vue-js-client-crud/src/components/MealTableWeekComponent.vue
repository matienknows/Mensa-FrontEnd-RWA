<template>
  <section class="meal-table-week">
    <div class="container">
      <h1 class="page-title">Week Plan</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <div class="form-group">
        <select class="form-control" id="optionMenu" v-model="selectedMealTable"
                @change="refreshMealTable(selectedMealTable)">
          <option value="" disabled selected>Select Calendar Week</option>
          <option v-for="weekMealTable in weekMealTables" v-bind:key="weekMealTable.id" v-bind:value="weekMealTable.id">
            {{ weekMealTable.calendarWeek }}
          </option>
        </select>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th v-if="checkUser == 'admin'">Actions</th>
            <th scope="col">Day</th>
            <th scope="col">ID</th>
            <th>Meal</th>
            <th>Type</th>
            <th>Price ($)</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(meal, key) in mealTables.mealTableWeek" v-bind:key="meal.id">
            <td v-if="checkUser == 'admin'">
              <div>
                <b-button variant="outline-danger" @click="loadMealInfo(key, meal.id)"
                          v-b-modal.delete-modal>
                  <div class="logo">
                    <img src="../../src/assets/images/trash-can.svg" alt="trash can">
                  </div>
                </b-button>
              </div>
            </td>
            <td>{{ key }}</td>
            <td>{{ meal.id }}</td>
            <td>{{ meal.name }}</td>
            <td>{{ meal.type }}</td>
            <td>{{ meal.price }}</td>

          </tr>
          </tbody>
        </table>
      </div>
      <router-link v-if="checkUser == 'admin'" type="button" class="btn btn-outline-warning add-button"
                   to="/mealtable/update" tag="button">Update
        Meal Table
      </router-link>
      <router-link v-if="checkUser == 'admin'" type="button" class="btn btn-outline-info add-button" to="/mealtable/add"
                   tag="button">Add Meal Table
      </router-link>
      <router-link v-if="checkUser == 'admin'" type="button" class="btn btn-outline-danger add-button"
                   to="/mealtable/delete" tag="button">Delete Meal
        Table
      </router-link>
      <!-- Modal -->
      <b-modal id="delete-modal" ref="delete-modal" hide-footer title="Removal of a meal">
        <p class="my-4">Are you want to delete the selected meal?</p>
        <b-button class="modal-button" variant="outline-danger" block @click="hideModal">Cancel</b-button>
        <b-button class="modal-button" variant="outline-info" block @click="removeMealFromWeekMealTables">Yes,
          sure.
        </b-button>
      </b-modal>
    </div>
  </section>
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
      amountWeekMealTables: '',
      selectedMealTable: '',
      selectedMeal: {
        mealTableWeekId: '',
        mealId: '',
        weekday: '',
      },
      alertFailed: 'Before you delete a meal you have to choose the calendar week.',
      alertSucces: 'The removal was succesfully processed.',
    };
  },
  methods: {
    hideModal() {
      this.$refs['delete-modal'].hide()
    },
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

            this.$store.commit("setAmountWeekMealTables", {
              newAmount: (this.weekMealTables.length),
            });
            this.amountWeekMealTables = this.$store.state.amountWeekMealTables + 1;
            this.$store.commit("setAmountWeekMealTables", {
              newAmount: this.amountWeekMealTables,
            });
          });
    },
    removeMealFromWeekMealTables() {
      this.hideModal()
      MealTableDataService.deleteMealFromTableWeek(this.selectedMeal.mealTableWeekId, this.selectedMeal.mealId, this.selectedMeal.weekday)
          .then(response => {
            console.log(response)
            document.getElementById("alert-failed").style.display = "none"
            document.getElementById("alert-succes").style.display = "block"
            if (this.selectedMealTable !== '') {
              this.refreshMealTable(this.selectedMealTable);
            }
          })
          .catch(error => {
            console.log(error)
            document.getElementById("alert-succes").style.display = "none"
            document.getElementById("alert-failed").style.display = "block"
          })
    },
    loadMealInfo(key, mealId) {
      if (key == 'Monday') {
        this.selectedMeal.weekday = 0;
      }
      if (key == 'Tuesday') {
        this.selectedMeal.weekday = 1;
      }
      if (key == 'Wednesday') {
        this.selectedMeal.weekday = 2;
      }
      if (key == 'Thursday') {
        this.selectedMeal.weekday = 3;
      }
      if (key == 'Friday') {
        this.selectedMeal.weekday = 4;
      }
      this.selectedMeal.mealId = mealId;
      this.selectedMeal.mealTableWeekId = this.selectedMealTable;
    }
  },

  computed: {
    checkUser: function () {
      if (this.$store.state.userStatus == 'admin') {
        return 'admin';
      }
      return false;
    },
  },
  created() {
    //this.refreshMealTable();
    this.retrieveWeekMealTables();
  }
};
</script>

<style scoped lang="scss">

thead {
  background: rgb(219, 3, 123);
  background: linear-gradient(16deg, rgba(219, 3, 123, 1) 0%, rgba(219, 3, 218, 1) 81%);
  color: white;
}

.page-title {
  margin: 35px 0 35px 0;
  text-align: center;
  color: #DB037B;
}

.add-button {
  margin: 30px 5px 10px 5px;
}

.modal-button {
  margin: 15px 10px 10px 0;
}

#alert-failed {
  margin: 30px 0 30px 0;
  display: none;
}

#alert-succes {
  margin: 30px 0 30px 0;
  display: none;
}

</style>