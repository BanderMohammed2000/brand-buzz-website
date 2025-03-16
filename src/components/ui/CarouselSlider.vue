<template>
  <div class="container-fluid pt-3 pb-5 px-0">
    <div
      id="testimonialCarousel"
      ref="carousel"
      :class="{ slide: isSmallScreen }"
      class="carousel"
    >
      <div class="carousel-inner" ref="carouselInner">
        <div
          class="carousel-item"
          v-for="(data, index) in commentData"
          :key="index"
          :class="{ active: index === getActiveItemIndex }"
        >
          <!-- <transition name="card" mode="out-in">
          </transition> -->
          <div class="card rounded-3">
            <div class="card-body">
              <div class="d-flex align-items-center pt-2">
                <img :src="data.image" :alt="data.name" />
                <div>
                  <h6 class="card-title mb-0">{{ data.name }}</h6>
                  <span class="text-secondary">{{ data.position }}</span>
                  <div class="text-secondary">{{ index + 1 }}</div>
                </div>
              </div>
              <p class="card-text mt-3 mb-3">{{ data.text }}</p>
              <div>
                <ul class="list-inline rating">
                  <li class="list-inline-item me-1">
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li class="list-inline-item me-1">
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li class="list-inline-item me-1">
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li class="list-inline-item me-1">
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li class="list-inline-item me-1">
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" @click="scrollPrev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" @click="scrollNext">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentData: [
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/square-headshot-1.png",
          name: "Jane Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/square-headshot-2.png",
          name: "June Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg",
          name: "John Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg",
          name: "John Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg",
          name: "John Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg",
          name: "John Doe",
          position: "Web developer",
        },
        {
          text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg",
          name: "John Doe",
          position: "Web developer",
        },
      ],
      scrollPosition: 0,
      cardWidth: 0,
      carouselWidth: 0,
      isSmallScreen: false,
      activeItemIndex: 0,
      numOfCardsShown: 0,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    this.$nextTick(() => {
      const carouselInner = this.$refs.carouselInner;
      const carouselItems = carouselInner.children;

      if (carouselItems.length > 0) {
        // offsetWidth يعطينا العرض الفعلي (بالبكسل) لهذا العنصر، بما في ذلك الـ padding والـ border، لكنه لا يشمل الـ margin.
        this.cardWidth = carouselItems[0].offsetWidth;

        // console.log(this.cardWidth);

        // console.log(Math.floor(carouselItems.length / 2 - 1) * 450);
        // console.log("scrollPosition ", this.scrollPosition);

        /*
        scrollWidth يعطينا العرض الكامل القابل للتمرير (scrollable width) داخل carouselInner.
        أي إجمالي عرض جميع العناصر الموجودة داخل الكاروُسل، حتى لو لم تكن كلها مرئية على الشاشة في نفس الوقت.
        */
        this.carouselWidth = carouselInner.scrollWidth;

        this.scrollPosition =
          Math.floor(carouselItems.length / 2 - 1) * this.cardWidth;
        this.activeItemIndex = Math.ceil(carouselItems.length / 2);

        console.log("card offsetWidth ", carouselItems[0].offsetWidth);
        console.log("scrollWidth ", carouselInner.scrollWidth);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
        });
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  computed: {
    getActiveItemIndex() {
      return this.activeItemIndex - 1;
    },
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.matchMedia("(max-width: 575px)").matches;
      let mobileSize = window.matchMedia("(max-width: 575px)").matches;
      // let tabletSize = window.matchMedia("(min-width: 576px)").matches;
      let labSize = window.matchMedia("(min-width: 768px)").matches;

      this.numOfCardsShown = mobileSize ? 1 : labSize ? 3 : 2;
    },
    scrollNext() {
      if (
        this.scrollPosition <
        this.carouselWidth - this.cardWidth * this.numOfCardsShown
      ) {
        this.scrollPosition += this.cardWidth;

        console.log("scrollPosition  scrollNext  " + this.scrollPosition);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
          behavior: "smooth",
        });

        this.activeItemIndex++;
      }
    },
    scrollPrev() {
      if (this.scrollPosition > 0) {
        this.scrollPosition -= this.cardWidth;
        console.log("scrollPosition  scrollPrev  " + this.scrollPosition);

        this.$refs.carouselInner.scrollTo({
          left: this.scrollPosition,
          behavior: "smooth",
        });

        this.activeItemIndex--;
      }
    },
  },
};
</script>

<style scoped>
#testimonialCarousel .carousel-inner {
  height: 310px;
  align-items: center;
}
.carousel-item {
  /* transition: all 5s ease-in-out; */
}
.carousel-item.active {
  /* background-color: red; */
  /* scale: 1.1; */
  /* flex-grow: 1.2; */
  /*بعدين*/
  /* margin: 0 15px; */
  /* transition: all 5s ease-in-out; */

  z-index: 1;
}
/*بعدين*/
.carousel-item.active .card {
  transform: scale(1.1) translateY(-13px);
  margin: 0 25px;
}

.carousel-item .card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15),
    -1px -1px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
}

.card-title {
  color: #e85f19;
  font-weight: 700;
}
.card-title,
.text-secondary {
  font-size: 15px;
}
.card-text {
  color: #6d6d6d;
  font-size: 14px;
}
.carousel img {
  width: 50px;
  max-height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
}
.rating {
  color: #f3af41;
}
.carousel-inner {
  padding: 1em;
}

.carousel .card {
  margin: 0 0.5em;
  border: 0;
}

.carousel-control-prev,
.carousel-control-next {
  width: 3rem;
  height: 3rem;
  background-color: grey;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

/*
transition
*/

/* .card-enter-from {
  transform: scale(1);
}

.card-leave-to {
  transform: scale(0.9);
}

.card-enter-active {
  transition: all 0.3s ease-out;
}

.card-leave-active {
  transition: all 0.3s ease-in;
}

.card-enter-to,
.card-leave-from {
  transform: scale(1.1);
} */

@media screen and (min-width: 576px) {
  .carousel-inner {
    display: flex;
    /* width: 90%; */
    width: 100%;
    margin-inline: auto;
    padding: 1em 0;
    overflow: hidden;
  }
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 calc(100% / 2);
  }
  .carousel-item.active {
    scale: 1;
  }
}

@media screen and (min-width: 768px) {
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 calc(99% / 3);
    /* flex: 0 0 450px; */
  }
}

@media (max-width: 575px) {
  .carousel-inner {
    display: flex;
    /* width: 90%; */
    width: 100%;
    margin-inline: auto;
    padding: 1em 0;
    overflow: hidden;
  }
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 100%;
    /* flex: 0 0 450px; */
  }
  .carousel-item.active {
    scale: 1;
  }
}
</style>
