<template>
  <div class="container">
    <section class="meal-table-update">
      <h1 class="page-title">Update a Mealplan</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <form class="meal-table" @submit="checkForm">
        <div class="form-row text-center">
          <div class="form-group col-12">
            <div class="form-group">
              <select class="form-control" id="optionMenu" v-model="selectedCalendarWeek"
                      @change="refreshMealTable(selectedCalendarWeek)">
                <option value="" disabled selected>Select Calendar Week</option>
                <option v-for="weekMealTable in weekMealTables" v-bind:key="weekMealTable.id" v-bind:value="weekMealTable.id">
                  {{ weekMealTable.calendarWeek }}
                </option>
              </select>
            </div>
            <small class="form-text text-muted">The given Information is auto generated and can not be modified.</small>
            <small id="calendarErrorMsg" class="form-text text-muted">Please choose a week.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-4">
            <input type="text" value="Monday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <input type="text" v-model="foodOnMonday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <select class="form-control" v-model="selectedFoodMonday" id='selectedFoodMonday'>
              <option value="" selected>Change to</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="mondayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-4">
            <input type="text" value="Tuesday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <input type="text" v-model="foodOnTuesday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <select class="form-control" v-model="selectedFoodTuesday" id="selectedFoodTuesday">
              <option value="" disabled selected>Change to</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="tuesdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-4">
            <input type="text" value="Wednesday" class="form-control" placeholder="Food Label" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <input type="text" v-model="foodOnWednesday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <select class="form-control" v-model="selectedFoodWednesday" id="selectedFoodWednesday">
              <option value="" disabled selected>Change to</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="wednesdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-4">
            <input type="text" value="Thursday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <input type="text" v-model="foodOnThursday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <select class="form-control" v-model="selectedFoodThursday" id="selectedFoodThursday">
              <option value="" disabled selected>Change to</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="thursdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-4">
            <input type="text" value="Friday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <input type="text" v-model="foodOnFriday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-4">
            <select class="form-control" v-model="selectedFoodFriday" id="selectedFoodFriday">
              <option value="" disabled selected>Change to</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="fridayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
      </form>
      <div class="button row justify-content-center">
        <button class="btn btn-outline-danger col-6" v-on:click="addMealTableWeek">Submit</button>
      </div>
      <div class="button row justify-content-center">
        <router-link type="button" class="btn btn-outline-info col-6" to="/weekly" tag="button">
          Go Back
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>

import MealTableDataService from "@/service/MealTableDataService";
import MealDataService from "@/service/MealDataService";


export default {
  name: "MealTableWeekUpdateComponent",
  data: function () {
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

      meals: [],
      weekMealTables: [],

      foodOnMonday: '',
      foodOnTuesday: '',
      foodOnWednesday: '',
      foodOnThursday: '',
      foodOnFriday: '',

      selectedCalendarWeek: '',
      selectedFoodMonday: '',
      selectedFoodTuesday: '',
      selectedFoodWednesday: '',
      selectedFoodThursday: '',
      selectedFoodFriday: '',

      alertFailed: 'Duplicate Selection: Please pick one Food once a week.',
      alertSucces: 'Your changes were succesfully submitted.',

      errorMessage: false
    };
  },
  methods: {
    resetForm() {
      this.selectedFoodMonday = '';
      this.selectedFoodTuesday = '';
      this.selectedFoodWednesday = '';
      this.selectedFoodThursday = '';
      this.selectedFoodFriday = '';
    },
    refreshMeal() {
      MealDataService.retrieveAllMeals()
          .then(response => {
            this.meals = response.data;
          });
    },
    refreshMealTable(id) {
      this.resetForm()
      MealTableDataService.retrieveMealTableById(id)
          .then(response => {
            this.mealTables = response.data;
            try {
              this.foodOnMonday = this.mealTables.mealTableWeek['Monday'].name;
            } catch (e) {
              this.foodOnMonday = "No meal was deposited."
              this.foodOnFriday = this.mealTables.mealTableWeek['Friday'].name;
            }
            try {
              this.foodOnTuesday = this.mealTables.mealTableWeek['Tuesday'].name;
            } catch (e) {
              this.foodOnTuesday = "No meal was deposited."
            }
            try {
              this.foodOnWednesday = this.mealTables.mealTableWeek['Wednesday'].name;
            } catch (e) {
              this.foodOnWednesday = "No meal was deposited."
            }
            try {
              this.foodOnThursday = this.mealTables.mealTableWeek['Thursday'].name;
            } catch (e) {
              this.foodOnThursday = "No meal was deposited."
            }
            try {
              this.foodOnFriday = this.mealTables.mealTableWeek['Friday'].name;
            } catch (e) {
              this.foodOnFriday = "No meal was deposited."
            }
          });
    },
    retrieveWeekMealTables() {
      MealTableDataService.retrieveAllMeatTables()
          .then(response => {
            this.weekMealTables = response.data;
            this.amountWeekMealTables = (this.weekMealTables.length) + 1;
            this.$store.commit("setAmountWeekMealTables", {
              newAmount: this.amountWeekMealTables,
            });
          });
    },
    checkForm: function () {
      if (!this.selectedCalendarWeek) {
        document.getElementById("calendarErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("calendarErrorMsg").style.display = "none"
      }
      if (!this.selectedFoodMonday) {
        document.getElementById("mondayErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("mondayErrorMsg").style.display = "none"
      }
      if (!this.selectedFoodTuesday) {
        document.getElementById("tuesdayErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("tuesdayErrorMsg").style.display = "none"
      }
      if (!this.selectedFoodWednesday) {
        document.getElementById("wednesdayErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("wednesdayErrorMsg").style.display = "none"
      }
      if (!this.selectedFoodThursday) {
        document.getElementById("thursdayErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("thursdayErrorMsg").style.display = "none"
      }
      if (!this.selectedFoodFriday) {
        document.getElementById("fridayErrorMsg").style.display = "block"
        this.errorMessage = true;
      } else {
        document.getElementById("fridayErrorMsg").style.display = "none"
      }
    },
    addMealTableWeek: function () {
      //this.selectedCalendarWeek = document.getElementById("selectedFoodMonday").value
      this.selectedFoodMonday = document.getElementById("selectedFoodMonday").value
      this.selectedFoodTuesday = document.getElementById("selectedFoodTuesday").value
      this.selectedFoodWednesday = document.getElementById("selectedFoodWednesday").value
      this.selectedFoodThursday = document.getElementById("selectedFoodThursday").value
      this.selectedFoodFriday = document.getElementById("selectedFoodFriday").value

      var foodDetailsOnMonday = this.selectedFoodMonday.split(',');
      var foodDetailsOnTuesday = this.selectedFoodTuesday.split(',');
      var foodDetailsOnWednesday = this.selectedFoodWednesday.split(',');
      var foodDetailsOnThursday = this.selectedFoodThursday.split(',');
      var foodDetailsOnFriday = this.selectedFoodFriday.split(',');

      this.checkForm()

      if (this.errorMessage) {
        this.errorMessage = false
        return;
      }
      var data = {
        id: this.selectedCalendarWeek,
        calendarWeek: this.selectedCalendarWeek,
        mealTableWeek: {
          Monday: {
            id: foodDetailsOnMonday[0],
            name: foodDetailsOnMonday[1],
            type: foodDetailsOnMonday[2],
            price: foodDetailsOnMonday[3]
          },
          Tuesday: {
            id: foodDetailsOnTuesday[0],
            name: foodDetailsOnTuesday[1],
            type: foodDetailsOnTuesday[2],
            price: foodDetailsOnTuesday[3]
          },
          Wednesday: {
            id: foodDetailsOnWednesday[0],
            name: foodDetailsOnWednesday[1],
            type: foodDetailsOnWednesday[2],
            price: foodDetailsOnWednesday[3]
          },
          Thursday: {
            id: foodDetailsOnThursday[0],
            name: foodDetailsOnThursday[1],
            type: foodDetailsOnThursday[2],
            price: foodDetailsOnThursday[3]
          },
          Friday: {
            id: foodDetailsOnFriday[0],
            name: foodDetailsOnFriday[1],
            type: foodDetailsOnFriday[2],
            price: foodDetailsOnFriday[3]
          }
        }
      }
      MealTableDataService.updateMealTableWeek(data)
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
    this.refreshMealTable(1)
    this.retrieveWeekMealTables()
    this.refreshMeal();
  }
}
</script>

<style scoped lang="scss">
.meal-table-add {
  height: auto;
}

.page-title {
  margin: 35px 0 35px 0;
  text-align: center;
  color: #DB037B;
}

.button {
  margin: 30px 0px 30px 0px;
}

.meal-table {
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

#calendarErrorMsg {
  display: none;
  color: red !important;
}

#mondayErrorMsg {
  display: none;
  color: red !important;
}

#tuesdayErrorMsg {
  display: none;
  color: red !important;
}

#wednesdayErrorMsg {
  display: none;
  color: red !important;
}

#thursdayErrorMsg {
  display: none;
  color: red !important;
}

#fridayErrorMsg {
  display: none;
  color: red !important;
}
</style>