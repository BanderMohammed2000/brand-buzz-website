<template>
  <section id="services">
    <div class="container-fluid mt-4">
      <div class="row mb-3">
        <div class="col text-center">
          <base-card>
            <h1 class="card-title">
              We Provide The Best <span class="orange-color">Services</span>
            </h1>
            <p class="card-text mt-3 mx-auto">
              Let us unleash the full potential of your business with our
              data-driven strategies
            </p></base-card
          >
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 mb-4"
          v-for="service in services"
          :key="service.title"
        >
          <base-card mode="service-card" class="mx-auto">
            <template v-slot:header>
              <div
                class="square py-2"
                :style="{ backgroundColor: service.color }"
              >
                <!-- <span><i :class="service.icon"></i></span> -->
                <img :src="`/icons/${service.icon}.png`" alt="icon" />
              </div>
            </template>
            <h6 class="card-title">{{ service.title }}</h6>
            <p class="card-text mx-auto">
              {{ service.text }}
            </p>
            <template v-slot:footer>
              <base-button mode="outline button-small">Read More</base-button>
            </template>
          </base-card>
        </div>
        <!-- <div class="col-lg-3 col-md-6 mb-4">
          <base-card mode="service-card" class="mx-auto">
            <template v-slot:header>
              <div class="square py-2">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </template>
            <h6 class="card-title">Seo/Sem</h6>
            <p class="card-text mx-auto">
              Let us unleash the full potential of your business with our
              data-driven strategies
            </p>
            <template v-slot:footer>
              <base-button mode="outline button-small">Read More</base-button>
            </template>
          </base-card>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <base-card mode="service-card" class="mx-auto">
            <template v-slot:header>
              <div class="square py-2">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </template>
            <h6 class="card-title">Seo/Sem</h6>
            <p class="card-text mx-auto">
              Let us unleash the full potential of your business with our
              data-driven strategies
            </p>
            <template v-slot:footer>
              <base-button mode="outline button-small">Read More</base-button>
            </template>
          </base-card>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <base-card mode="service-card" class="mx-auto">
            <template v-slot:header>
              <div class="square py-2">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </template>
            <h6 class="card-title">Seo/Sem</h6>
            <p class="card-text mx-auto">
              Let us unleash the full potential of your business with our
              data-driven strategies
            </p>
            <template v-slot:footer>
              <base-button mode="outline button-small">Read More</base-button>
            </template>
          </base-card>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Seo/Sem",
          text: "Boosting visibility with SEO and SEM for higher traffic and conversions",
          color: "#f1c00c",
          icon: "analysis",
        },
        {
          title: "Marketing",
          text: "Driving engagement and growth through strategic and effective marketing",
          color: "#02ea6a",
          icon: "mobile-marketing",
        },
        {
          title: "Viral Campaign",
          text: "Creating buzz and rapid engagement through strategic viral campaigns",
          color: "#876fed",
          icon: "web-promotion",
        },
        {
          title: "Others",
          text: "Providing tailored solutions to meet diverse business needs effectively",
          color: "#f43a01",
          icon: "solution",
        },
      ],
    };
  },
  computed: {
    backgroundColor() {
      return this.service.color;
    },
  },
};
</script>

<style scoped>
.card-title {
  font-weight: 700;
}

.col .card-text {
  color: #6d6d6d;
  width: 385px;
}

.service-card .square {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* width: 25%; */
  /* padding-bottom: 20px; */
  width: 70px;
  /* border-radius: 5px 4px 15px 1px; */
  border-radius: 7% 25% 26% 1% / 5% 33% 36% 27%;
}

/* .service-card .square span {
  font-size: 25px;
} */

.service-card .square img {
  width: 50px;
}

.service-card .card-text {
  font-size: 15px;
  color: #6d6d6d;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 991.98px) {
  .service-card .card-text {
    -webkit-line-clamp: 2;
  }
}

@media (max-width: 575.98px) {
  .col .card-text {
    width: 100%;
  }
}
</style>
