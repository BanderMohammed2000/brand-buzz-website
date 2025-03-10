<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-5 my-auto">
        <base-card class="mb-3">
          <div class="card-body">
            <h1 class="card-title">
              We create <span class="orange-color">solutions</span> for your
              business
            </h1>
            <p class="card-text mt-3">
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting-edge.
            </p>
          </div>

          <template v-slot:footer>
            <base-button class="mt-4">Get Started</base-button>
          </template>
        </base-card>
      </div>
      <div class="col-lg-7">
        <!-- <div class="img"></div> -->
        <img src="../assets/images/starting-business-hidden.svg" class="img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  width: 390px;
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 991.98px) {
}

@media (max-width: 767.98px) {
  .card-title {
    width: 300px;
  }
}

@media (max-width: 575.98px) {
  .card-title {
    width: 100%;
  }
}
</style>
