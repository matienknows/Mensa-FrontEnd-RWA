<template>
  <div class="container">
    <h3>Meal Table</h3>
    <router-view></router-view>
    <div class="container">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        <tr class="mealDetails" v-for="meal in meals" v-bind:key="meal.id">
          <td class="id">{{ meal.id }}</td>
          <td>{{ meal.name }}</td>
          <td>{{ meal.type }}</td>
          <td>{{ meal.price }}</td>
        </tr>
        </tbody>
      </table>
      <router-link to="/meal/update"><button type="button" class="btn btn-outline-primary">Update</button></router-link>
      <button type="button" class="btn btn-outline-danger" v-on:click="deleteById">Delete</button>
    </div>
  </div>
</template>

<script>
import MealDataService from "@/service/MealDataService";
import $ from 'jquery'
//set a select on table row and add the id to url
$(function () {
  $('.table').on('click', 'tr', function () {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $('tr.selected').removeClass('selected');
      $(this).addClass('selected')
      let id = $(this).find(".id").text();
      window.history.replaceState('', '', `/meal/${id}`);
    }
  })
});


export default {
  name: "MealComponent",
  data() {
    return {
      meals: [],
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
    deleteById:
        function () {
          var currentUrl = window.location.pathname;
          var id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
          console.log(id);
          MealDataService.delete(id)
              .then(response => {
                    console.log(response)
                    this.refreshMeal()
                  })
        },
    selectToUpdate: function () {
    }
  },
  created() {
    this.refreshMeal();
  }
}
</script>

<style scoped lang="scss">

.selected {
  background-color: grey;
  text-decoration-color: white;
}
</style>