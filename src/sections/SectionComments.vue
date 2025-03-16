<template>
  <section id="comments" class="mb-5">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <base-card class="mt-b">
            <div class="card-body">
              <h1 class="card-title">
                What <span class="orange-color">Clients</span> Say!
              </h1>
              <p class="card-text mt-3 mb-0">
                See How Our Digital Marketing Agency Helped
              </p>
              <p class="card-text">Clients Achieve Their Goals</p>
            </div>
          </base-card>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <carousel-slider></carousel-slider>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CarouselSlider from "../components/ui/CarouselSlider.vue";
export default {
  components: {
    CarouselSlider,
  },
};
</script>

<style scoped>
.card-title {
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
}
</style>
