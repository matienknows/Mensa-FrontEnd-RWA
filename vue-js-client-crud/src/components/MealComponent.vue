<template>
  <div class="container">
    <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
    <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
    <h3>Meal Table</h3>
    <div class="container">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Meal</th>
          <th>Type</th>
          <th>Price ($)</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr class="mealDetails" v-for="meal in meals" v-bind:key="meal.id">
          <td class="id">{{ meal.id }}</td>
          <td>{{ meal.name }}</td>
          <td>{{ meal.type }}</td>
          <td>{{ meal.price }}</td>
          <td>
            <div>
              <b-button variant="outline-danger" @click="loadMealInfo(meal.id)" v-b-modal.delete-modal>
                <div class="logo">
                  <img src="../../src/assets/images/trash-can.svg" alt="trash can">
                </div>
              </b-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-outline-primary" v-on:click="selectToUpdate">Update</button>
    </div>
    <!-- Modal -->
    <b-modal id="delete-modal" ref="delete-modal" hide-footer title="Removal of a meal">
      <p class="my-4">Are you want to delete the selected meal?</p>
      <p class="my-4">Warning: This action will delete all days in the meal tables, which contain this meal.</p>
      <b-button class="modal-button" variant="outline-danger" block @click="hideModal">Cancel</b-button>
      <b-button class="modal-button" variant="outline-info" block @click="deleteMealById">
        Yes,
        sure.
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import MealDataService from "@/service/MealDataService";
import router from "@/router";

export default {
  name: "MealComponent",
  data() {
    return {
      meals: [],
      selectedMeal: {
        mealId: '',
      },
      alertFailed: 'The removal failed.',
      alertSucces: 'The removal was succesfully processed.',
    };
  },
  methods: {
    hideModal() {
      this.$refs['delete-modal'].hide()
    },
    refreshMeal() {
      MealDataService.retrieveAllMeals()
          .then(response => {
            this.meals = response.data;
          });
    },
    deleteMealById() {
      this.hideModal()
      MealDataService.deleteMealById(this.selectedMeal.mealId)
            .then(response => {
              console.log(response)
              document.getElementById("alert-failed").style.display = "none"
              document.getElementById("alert-succes").style.display = "block"
              this.refreshMeal()
            })
          .catch(error => {
            console.log(error)
            document.getElementById("alert-succes").style.display = "none"
            document.getElementById("alert-failed").style.display = "block"
          })
    },
    selectToUpdate: function () {
      var currentUrl = window.location.pathname;
      var id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
      router.push({name: 'MealUpdateComponent', params: {id}})
    },
    loadMealInfo(mealId) {
      this.selectedMeal.mealId = mealId;
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

#alert-failed {
  margin: 30px 0px 30px 0px;
  display: none;
}

#alert-succes {
  margin: 30px 0px 30px 0px;
  display: none;
}
</style>