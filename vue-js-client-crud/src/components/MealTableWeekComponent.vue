<template>
  <div class="container">
    <h3>Meal Table</h3>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th>Meal Tabl</th>
          <th>Calendar Week</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mealTable in mealTables" v-bind:key="mealTable.id">
          <td>{{}}</td>
          <td>{{}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatTableWeekComponent"
}
</script>

<style scoped lag="scss">

</style>