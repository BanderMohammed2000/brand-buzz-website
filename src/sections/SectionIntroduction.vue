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
  /*Animation*/
  /* background-image: url("../assets/images/starting-business-hidden.svg");
  background-repeat: no-repeat; */

  /* background-size: contain;
  background-position: right top; */

  /* background-size: cover;
  background-position: center; */

  /* min-height: 500px; */

  /* width: 100%;
  height: 100%; */
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 991.98px) {
  .img {
    /* background-position: center top; */
    /* min-height: 457px; */
  }
}

@media (max-width: 767.98px) {
  .img {
    /* min-height: 303px; */
  }
  .card-title {
    width: 300px;
  }
}

@media (max-width: 575.98px) {
  /* .img {
    min-height: 267px;
  } */
  .card-title {
    width: 100%;
  }
}
</style>
