<template>
  <div class="container">
    <div>MealUpdateComponent</div>
    <form>
      <div class="text-center">
        <div class="form-row">
          <div class="form-group col-lg-4 offset-lg-4">
            <label>Type of the Meal</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value='fleischhaltig'>fleischhaltig</option>
                <option value="vegetarisch">vegetarisch</option>
                <option value="vegan">vegan</option>
              </select>
            </div>
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="form-row">
          <div class="form-group col-lg-2 offset-lg-5">
            <label>Price</label>
            <input type="number" step=".10" class="form-control">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="form-row">
          <div class="form-group col-lg-4 offset-lg-4">
            <label>Name of Meal</label>
            <input type="text" class="form-control">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MealUpdateComponent"
}
</script>

<style scoped>

</style>