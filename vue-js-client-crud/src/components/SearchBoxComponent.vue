<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">
        <img class="trash-can" src="../../src/assets/images/glass.svg" alt="magnifying glass">
      </span>
    </div>
    <input type="text" class="form-control" id="searchInput" v-on:keyup="searchFilter()" placeholder="Search for Meal">
  </div>
</template>

<script>
export default {
  name: "SearchBoxComponent",
  computed: {
    checkUser: function () {
      if (this.$store.state.userStatus == 'admin') {
        return 'admin';
      }
      return false;
    }
  },
  methods: {
    searchFilter() {
      var input, filter, table, tr, td, i, searchText;

      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("meal-list");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        if (this.checkUser === 'admin') {
          td = tr[i].getElementsByTagName("td")[2];
        } else {
          td = tr[i].getElementsByTagName("td")[1];
        }
        if (td) {
          searchText = td.textContent || td.innerText;
          if (searchText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}

</script>
