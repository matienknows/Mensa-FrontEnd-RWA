<template>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="form-group col-5">
          <label>Calendar Week</label>
          <select class="form-control col-5" v-model="selectedCalendarWeek">
            <option v-for="n  in 52" v-bind:key="n">{{ n }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" v-model="monday.value" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodMonday" id="selectedFoodMonday">
            <option value="" disabled selected>Select the Food</option>
            <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }}, {{ meal.price }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" v-model="tuesday.value" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodTuesday" id="selectedFoodTuesday">
            <option value="" disabled selected>Select the Food</option>
            <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }}, {{ meal.price }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" v-model="wednesday.value" class="form-control" placeholder="Food Label" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodWednesday" id="selectedFoodWednesday">
            <option value="" disabled selected>Select the Food</option>
            <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }}, {{ meal.price }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" v-model="thursday.value" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodThursday" id="selectedFoodThursday">
            <option value="" disabled selected>Select the Food</option>
            <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }}, {{ meal.price }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" v-model="friday.value" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodFriday" id="selectedFoodFriday">
            <option value="" disabled selected>Select the Food</option>
            <option v-for="meal in meals" v-bind:key="meal.id">{{ meal.id }},{{ meal.name }}, {{ meal.type }}, {{ meal.price }}</option>
          </select>
        </div>
      </div>
    </form>
    <button class="btn btn-primary" v-on:click="addMealTableWeek">Submit</button>
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
      monday: {id: 0, value: "Monday"},
      tuesday: {id: 1, value: "Tuesday"},
      wednesday: {id: 2, value: "Wednesday"},
      thursday: {id: 3, value: "Thursday"},
      friday: {id: 4, value: "Friday"},
      selectedCalendarWeek: '',
      selectedFoodMonday: '',
      selectedFoodTuesday: '',
      selectedFoodWednesday: '',
      selectedFoodThursday: '',
      selectedFoodFriday: '',
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
          Monday: {id: foodDetailsOnMonday[0], name: foodDetailsOnMonday[1], type: foodDetailsOnMonday[2], price: foodDetailsOnMonday[3]},
          Tuesday: {id: foodDetailsOnTuesday[0], name: foodDetailsOnTuesday[1], type: foodDetailsOnTuesday[2], price: foodDetailsOnTuesday[3]},
          Wednesday: {id: foodDetailsOnWednesday[0], name: foodDetailsOnWednesday[1], type: foodDetailsOnWednesday[2], price: foodDetailsOnWednesday[3]},
          Thursday: {id: foodDetailsOnThursday[0], name: foodDetailsOnThursday[1], type: foodDetailsOnThursday[2], price: foodDetailsOnThursday[3]},
          Friday: {id: foodDetailsOnFriday[0], name: foodDetailsOnFriday[1], type: foodDetailsOnFriday[2], price: foodDetailsOnFriday[3]}
        }
      }
      MealTableDataService.addMealTableWeek(data)
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped>

</style>