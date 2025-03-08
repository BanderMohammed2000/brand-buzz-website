<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-5">
        <base-card class="mb-3">
          <h1 class="card-title">
            We create <span class="orange-color">solutions</span> for your
            business
          </h1>
          <p class="card-text mt-3">
            Our team keeps a keen eye on emerging trends and technologies to
            ensure your marketing campaigns remain cutting-edge.
          </p>
          <template v-slot:footer>
            <base-button class="mt-4">Get Started</base-button>
          </template>
        </base-card>
      </div>
      <div class="col-lg-7">
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<style>
.card-title {
  width: 390px;
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
}
.orange-color {
  color: #e85f19;
}
.img {
  /*Animation*/
  background-image: url("../assets/images/starting-business-hidden.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  min-height: 500px;
}

@media (max-width: 991.98px) {
  .img {
    background-position: left top;
  }
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
