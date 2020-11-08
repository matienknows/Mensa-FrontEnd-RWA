<template>
  <div>
    <b-carousel id="carousel-fade" img-width="1024"
                img-height="480" fade indicators>
      <b-carousel-slide class="img-item" caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide class="img-item" caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide class="img-item" caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "LandingComponent"
}
</script>

<style scoped lang="scss">

#carousel-fade {
  text-shadow: 0px 0px 2px;
}

</style>