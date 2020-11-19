<template>
  <section class="meal-list">
    <div class="container">
      <h1 class="page-title">Meal Table</h1>
      <div class="alert alert-success hide text-center" id="alert-succes" role="alert">{{ alertSucces }}</div>
      <div class="alert alert-danger hide text-center" id="alert-failed" role="alert">{{ alertFailed }}</div>
      <router-link v-if="checkUser == 'admin'" type="button" class="btn btn-outline-warning col-lg-3 col-sm-6 add-button" variant="outline-warning"
                   to="/meal/add">
        <img class="trash-can" src="../../src/assets/images/plus.svg" alt="trash can">
      </router-link>
      <SearchBoxComponent></SearchBoxComponent>
      <div class="table-responsive meal-list">
        <table id="meal-list" class="table table-hover">
          <thead>
          <tr>
            <th v-if="checkUser == 'admin'">Actions</th>
            <th>ID</th>
            <th>Meal</th>
            <th>Type</th>
            <th>Price ($)</th>
          </tr>
          </thead>
          <tbody>
          <tr class="mealDetails" v-for="meal in meals" v-bind:key="meal.id">
            <td v-if="checkUser == 'admin'">
              <div>
                <b-button class="delete-button" variant="outline-info"
                          @click="selectToUpdate(meal.id)"
                          v-b-modal.delete-modal>
                  <img src="../../src/assets/images/pen.svg" alt="trash can">
                </b-button>
                <b-button class="update-button" variant="outline-danger"
                          @click="loadMealInfo(meal.id)"
                          v-b-modal.delete-modal>
                  <img src="../../src/assets/images/trash-can.svg" alt="trash can">
                </b-button>
              </div>
            </td>
            <td class="id">{{ meal.id }}</td>
            <td>{{ meal.name }}</td>
            <td>{{ meal.type }}</td>
            <td>{{ meal.price }}</td>
          </tr>
          </tbody>
        </table>
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
  </section>
</template>

<script>
import MealDataService from "@/service/MealDataService";
import router from "@/router";
import SearchBoxComponent from "@/components/SearchBoxComponent";

export default {
  name: "MealComponent",
  components: {SearchBoxComponent},
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
    searchFilter() {
      var input, filter, table, tr, td, i, searchText;

      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("meal-list");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          searchText = td.textContent || td.innerText;
          if (searchText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
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
    selectToUpdate(mealId) {
      var id = mealId
      router.push({name: 'MealUpdateComponent', params: {id}})
    },
    loadMealInfo(mealId) {
      this.selectedMeal.mealId = mealId;
    },
  },

  computed: {
    checkUser: function () {
      if (this.$store.state.userStatus == 'admin') {
        return 'admin';
      }
      return false;
    }
  },
  created() {
    this.refreshMeal();
  }
}
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

.selected {
  background-color: grey;
  text-decoration-color: white;
}

.add-button {
  margin: 20px 0;
}

#alert-failed {
  margin: 30px 0px 30px 0px;
  display: none;
}

#alert-succes {
  margin: 30px 0px 30px 0px;
  display: none;
}

.delete-button, .update-button {
  margin: 5px;
}

</style>