<template>
  <section class="meal-table-add">
    <div class="container">
      <h1 class="page-title">Meal Table</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <form class="meal-table" @submit="checkForm">
        <div class="form-row text-center">
          <div class="form-group col-12">
            <label>Calendar Week</label>
            <fieldset>
              <div>
                <b-form-spinbutton v-model="selectedCalendarWeek" min="1" max="52"></b-form-spinbutton>
              </div>
             <!-- <div class="form-group col-12">
                <input class="form-control text-center" type="text" v-model="selectedCalendarWeek">
              </div>-->
            </fieldset>
            <small class="form-text text-muted">Note: The Calendar Week will be.</small>
            <small id="calendarErrorMsg" class="form-text text-muted">Please choose a week.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="text" value="Monday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-6">
            <select class="form-control" v-model="selectedFoodMonday" id="selectedFoodMonday">
              <option value="" disabled selected>Select the Food</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="mondayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="text" value="Tuesday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-6">
            <select class="form-control" v-model="selectedFoodTuesday" id="selectedFoodTuesday">
              <option value="" disabled selected>Select the Food</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="tuesdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="text" value="Wednesday" class="form-control" placeholder="Food Label" onkeydown="return false">
          </div>
          <div class="form-group col-6">
            <select class="form-control" v-model="selectedFoodWednesday" id="selectedFoodWednesday">
              <option value="" disabled selected>Select the Food</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="wednesdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="text" value="Thursday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-6">
            <select class="form-control" v-model="selectedFoodThursday" id="selectedFoodThursday">
              <option value="" disabled selected>Select the Food</option>
              <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }},
                {{ meal.price }}
              </option>
            </select>
            <small id="thursdayErrorMsg" class="form-text text-muted">Please choose a Food.</small>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="text" value="Friday" class="form-control" onkeydown="return false">
          </div>
          <div class="form-group col-6">
            <select class="form-control" v-model="selectedFoodFriday" id="selectedFoodFriday">
              <option value="" disabled selected>Select the Food</option>
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
    </div>
  </section>
</template>

<script>
import MealDataService from "@/service/MealDataService";
import MealTableDataService from "@/service/MealTableDataService";

export default {
  name: "MealTableWeekAddComponent",
  data: function () {
    return {
      meals: [],

      selectedCalendarWeek: 1,
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
    refreshMeal() {
      MealDataService.retrieveAllMeals()
          .then(response => {
            this.meals = response.data;
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
        id: (this.selectedCalendarWeek)*2,
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
      MealTableDataService.addMealTableWeek(data)
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

.meal-table-add {
  height: auto;
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