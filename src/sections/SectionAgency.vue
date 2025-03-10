<template>
  <section>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <base-card class="mb-3">
            <div class="card-body">
              <h1 class="card-title">
                Our <span class="orange-color">Agency</span>
              </h1>
              <p class="card-text mt-3">
                We believe in the power of data. Our analytics-driven approach
                allows us to make informed. Decisions and optimize your
                marketing efforts for maximum ROI. Let's turn your data into
                actionable insights. Tailored Solutions for Your Business.
              </p>
            </div>

            <template v-slot:footer>
              <base-button class="mt-4">Read More</base-button>
            </template>
          </base-card>
        </div>
        <div class="col-lg-6 col-image mx-auto">
          <!-- <div class="img"></div> -->
          <img src="../assets/images/Data analysis-bro.svg" class="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-title {
  width: 390px;
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
  width: 85%;
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 991.98px) {
  .col-image {
    width: 75%;
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
  .img {
    margin-top: 20px;
  }
}
</style>
