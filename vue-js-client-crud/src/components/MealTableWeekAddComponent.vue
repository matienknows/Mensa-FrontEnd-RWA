<template>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="form-group col-5">
          <label>Calendar Week</label>
          <select class="form-control col-5" v-model="selectedCalendarWeek">
            <option v-for="n  in 52" v-bind:key="n">{{n}}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Monday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodMonday">
            <option value="" disabled selected>Select the Food</option>
            <option  v-for="meal in meals" v-bind:key="meal.id" v-bind:value="meal.id">{{meal.name}}, {{meal.type}} </option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Tuesday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodTuesday">
            <option value="" disabled selected>Select the Food</option>
            <option  v-for="meal in meals" v-bind:key="meal.id" v-bind:value="meal.name">{{meal.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Wednesday" class="form-control" placeholder="Food Label" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodWednesday">
            <option value="" disabled selected>Select the Food</option>
            <option  v-for="meal in meals" v-bind:key="meal.id" v-bind:value="meal.name">{{meal.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Thursday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodThursday">
            <option value="" disabled selected>Select the Food</option>
            <option  v-for="meal in meals" v-bind:key="meal.id" v-bind:value="meal.name">{{meal.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Friday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-4">
          <select class="form-control" v-model="selectedFoodFriday">
            <option value="" disabled selected>Select the Food</option>
            <option  v-for="meal in meals" v-bind:key="meal.id" v-bind:value="meal.name">{{meal.name}}</option>
          </select>
        </div>
      </div>
    </form>
    <button class="btn btn-primary" v-on:click="addMealTableWeek">Submit</button>
  </div>
</template>

<script>
import MealDataService from "@/service/MealDataService";
export default {
  name: "MealTableWeekAddComponent",
  data() {
    return {
      meals: [],
      selectedCalendarWeek:'',
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
            console.log(response.data);
            this.meals = response.data;
          });
    },
    addMealTableWeek : function(){
      console.log(this.selectedCalendarWeek, this.selectedFoodMonday)
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped>

</style>