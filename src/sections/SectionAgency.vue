<template>
  <section id="agency">
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <base-card class="mb-3">
            <div class="card-body">
              <!-- <h1 class="card-title">
                Our <span class="orange-color">Agency</span>
              </h1> -->
              <div class="wrapper card-title">
                <!-- <p class="typewriter" ref="typewriterText"></p> -->
                <h1 class="split-text" ref="splitText"></h1>
              </div>
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
        <div class="col-lg-6 col-image mx-auto mb-5 mb-lg-0">
          <!-- <div class="img"></div> -->
          <img src="/images/Data analysis-bro.svg" class="img" loading="lazy" />
        </div>
      </div>
    </div>
    <multiple-circles
      id="circles-agency"
      bottom="72px"
      left="-34px"
      transform="rotate(232deg)"
      :opacity1="circlesOpacity.opacity1"
      :opacity2="circlesOpacity.opacity2"
      :opacity3="circlesOpacity.opacity3"
      :opacity4="circlesOpacity.opacity4"
      :opacity5="circlesOpacity.opacity5"
    ></multiple-circles>
  </section>
</template>

<script>
import { isInViewport } from "../utils/viewport";
import { splitNode } from "../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  data() {
    return {
      rawMessage: `Our <span class="orange-color">Agency</span>`,
      circlesOpacity: {
        opacity1: false,
        opacity2: false,
        opacity3: false,
        opacity4: false,
        opacity5: false,
      },
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      // تأكد أيضاً عند التحميل الأول
      this.checkVisibility();
    });
    window.addEventListener("scroll", this.showCirclesHandler);
  },

  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.checkVisibility);
  // },
  methods: {
    checkVisibility() {
      const el = this.$refs.splitText;
      if (el && isInViewport(el)) {
        const message = this.rawMessage;
        const el = this.$refs.splitText;
        el.innerHTML = "";

        // عنصر مؤقت لتحويل HTML string إلى DOM nodes
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = message;

        // نضيف كل عناصر tempDiv المفصولة إلى العنصر المستهدف
        tempDiv.childNodes.forEach((node) => {
          el.appendChild(splitNode(node));
        });

        // تطبيق أنيميشن gsap على كل الـ spans داخل el
        const spans = el.querySelectorAll("span");
        gsap.fromTo(
          spans,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out",
          }
        );

        window.removeEventListener("scroll", this.checkVisibility);
      }
    },
    showCircles(circlesObject, timeValue) {
      const circles = document.getElementById("circles-agency");
      if (circles && isInViewport(circles)) {
        const keys = Object.keys(circlesObject);
        let time = timeValue;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          setTimeout(() => {
            circlesObject[key] = +true;
          }, time);
          time += 300;
        }
        window.removeEventListener("scroll", this.showCirclesHandler);
      }
    },
    showCirclesHandler() {
      this.showCircles(this.circlesOpacity, 0);
    },
  },
};
</script>

<style scoped>
.card-title {
  width: 390px;
}
.card-title h1 {
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
  .col-image {
    width: 80%;
  }
}
</style>
