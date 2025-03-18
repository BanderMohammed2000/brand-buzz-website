<template>
  <div class="container-fluid mt-4 mt-lg-0">
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
        <img
          src="../assets/images/starting-business.svg"
          class="img"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  transform: translateY(-20px);
}
.card-title {
  /* width: 390px; */
  width: 370px;
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

/* @media (min-width: 992px) and (max-width: 1088px) {
} */

@media (max-width: 991.98px) {
  .container-fluid {
    transform: translateY(0);
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
