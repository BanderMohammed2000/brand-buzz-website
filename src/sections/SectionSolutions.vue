<template>
  <section id="solutions" class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-image">
          <img
            src="../assets/images/SEO analytics team-amico.svg"
            class="img"
          />
        </div>
        <div class="col-lg-6 my-auto">
          <base-card class="base-card">
            <div class="card-body">
              <h1 class="card-title">
                Simple <span class="orange-color">Solutions!</span>
              </h1>
              <p class="card-text mt-3">
                We understand that no two businesses are alike. That's why we
                take the time to understand
              </p>
            </div>
          </base-card>
          <horizontal-card
            class="horizontal-card"
            v-for="solution in solutions"
            :key="solution.num"
          >
            <template v-slot:img>
              <div class="circle-num">{{ solution.num }}</div>
            </template>
            <div class="card-body pb-0 pe-0">
              <h6 class="card-title mb-0">{{ solution.title }}</h6>
              <p class="card-text">{{ solution.text }}</p>
            </div>
          </horizontal-card>
          <div class="buttons">
            <base-button class="me-4 base-button">Get Started</base-button>
            <base-button mode="outline" class="base-button"
              >Read More</base-button
            >
          </div>
        </div>
      </div>
      <multiple-circles
        bottom="0"
        right="-90%"
        transform="rotate(202deg)"
      ></multiple-circles>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          num: 1,
          title: "Contact us",
          text: "Contact us to boost your brand visibility",
        },
        {
          num: 2,
          title: "Consult",
          text: "Always available to answer your questions",
        },
        {
          num: 3,
          title: "Place order",
          text: "Buy our package today to proceed",
        },
        {
          num: 4,
          title: "Payment",
          text: "We receives payments in all types of banking",
        },
      ],
    };
  },
};
</script>

<style scoped>
#solutions {
  background-color: #fcede6;
}

.card-title {
  font-weight: 700;
}

.base-card .card-text {
  color: #6d6d6d;
  width: 330px;
}

.horizontal-card {
  margin-top: 25px;
  position: relative;
}

.horizontal-card:nth-child(-n + 4):after {
  content: "";
  width: 3px;
  height: 25px;
  background-color: #c2d1f4;
  position: absolute;
  left: 45px;
  bottom: -25px;
  border-radius: 4px;
}

.horizontal-card .card-body {
  padding-top: 10px;
}

.horizontal-card .card-text {
  font-size: 14px;
  color: #6d6d6d;
  width: 100%;
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.circle-num {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 18px;
  background-color: #e85f19;
  color: #ffffff;
}

.buttons {
  display: flex;
  padding-left: 16px;
  margin-top: 40px;
}

@media (max-width: 991.98px) {
  .col-image {
    width: 75%;
    margin: 0 auto 20px;
  }
  .base-card .card-text {
    width: 80%;
  }
}

@media (max-width: 575.98px) {
  .base-card .card-body,
  .card.horizontal-card,
  .buttons {
    padding-left: 0;
  }

  .circle-num {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 16px;
  }

  .horizontal-card .card-body {
    padding-top: 5px;
  }

  .horizontal-card .card-text {
    font-size: 13px;
  }

  .horizontal-card:nth-child(-n + 4):after {
    all: unset;
  }

  .base-button {
    font-size: 15px;
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
