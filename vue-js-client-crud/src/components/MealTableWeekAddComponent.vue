<template>
  <div class="container">
    <form>
      <div class="form-row">
        <div class="form-group col-4">
          <label>Id</label>
          <input type="text" class="form-control">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group col-5">
          <label>Calendar Week</label>
          <input type="text" class="form-control">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Monday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-2">
          <input type="text" class="form-control" placeholder="Food Label">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Tuesday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-2">
          <input type="text" class="form-control" placeholder="Food Label">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Wednesday" class="form-control" placeholder="Food Label" onkeydown="return false">
        </div>
        <div class="form-group col-2">
          <input type="text" class="form-control" placeholder="Food Label">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Thursday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-2">
          <input type="text" class="form-control" placeholder="Food Label">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-2">
          <input type="text" value="Friday" class="form-control" onkeydown="return false">
        </div>
        <div class="form-group col-2">
          <input type="text" class="form-control" placeholder="Food Label">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "MealTableWeekAddComponent"
}
</script>

<style scoped>

</style>