<template>
  <div class="container">
    <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
    <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
    <form class="meal-table">
      <div class="form-row text-center">
        <div class="form-group col-12">
          <label>Calendar Week</label>
          <select class="form-control col-12" v-model="selectedCalendarWeek">
            <option value="" disabled selected>Select the Week</option>
            <option v-for="n  in 52" v-bind:key="n">{{ n }}</option>
          </select>
        </div>
      </div>
      <div class="form-row text-center">
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
        </div>
      </div>
    </form>
    <div class="button row justify-content-center">
    <button class="btn btn-primary col-6" v-on:click="addMealTableWeek">Submit</button>
    </div>
  </div>
</template>

<script>
import MealDataService from "@/service/MealDataService";
import MealTableDataService from "@/service/MealTableDataService";

export default {
  name: "MealTableWeekAddComponent",
  data: function () {
    return {
      meals: [],

      selectedCalendarWeek: '',
      selectedFoodMonday: '',
      selectedFoodTuesday: '',
      selectedFoodWednesday: '',
      selectedFoodThursday: '',
      selectedFoodFriday: '',

      alertFailed: 'Please pick one Food once a week.',
      alertSucces: 'Your changes were succesfully submitted.',

    };
  },
  methods: {
    refreshMeal() {
      MealDataService.retrieveAllMeals()
          .then(response => {
            this.meals = response.data;
          });
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

            console.log("error")
          })
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped lang="scss">
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
</style>