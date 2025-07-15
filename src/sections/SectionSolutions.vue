<template>
  <section id="solutions" class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-image">
          <img
            src="/images/SEO analytics team-amico.svg"
            class="img"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 my-auto">
          <base-card class="base-card">
            <div class="card-body">
              <!-- <h1 class="card-title">
                Simple <span class="orange-color">Solutions!</span>
              </h1> -->
              <div class="wrapper card-title">
                <h1 class="split-text" ref="splitText"></h1>
              </div>
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
              <h6 class="card-title mb-0" :ref="solution.id"></h6>
              <h6 class="card-title dummy-item mb-0">{{ solution.title }}</h6>
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
        id="circles-solutions"
        bottom="0"
        right="-90%"
        transform="rotate(202deg)"
        :opacity1="circlesOpacity.opacity1"
        :opacity2="circlesOpacity.opacity2"
        :opacity3="circlesOpacity.opacity3"
        :opacity4="circlesOpacity.opacity4"
        :opacity5="circlesOpacity.opacity5"
      ></multiple-circles>
    </div>
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
      rawMessage: `Simple <span class="orange-color">Solutions!</span>`,
      circlesOpacity: {
        opacity1: false,
        opacity2: false,
        opacity3: false,
        opacity4: false,
        opacity5: false,
      },
      solutions: [
        {
          id: "contact-us",
          num: 1,
          title: "Contact us",
          text: "Contact us to boost your brand visibility",
        },
        {
          id: "consult",
          num: 2,
          title: "Consult",
          text: "Always available to answer your questions",
        },
        {
          id: "place-order",
          num: 3,
          title: "Place order",
          text: "Buy our package today to proceed",
        },
        {
          id: "payment",
          num: 4,
          title: "Payment",
          text: "We receives payments in all types of banking",
        },
      ],
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

        this.showSolutionsTitles();

        window.removeEventListener("scroll", this.checkVisibility);
      }
    },
    showCircles(circlesObject, timeValue) {
      const circles = document.getElementById("circles-solutions");
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
    showSolutionsTitles() {
      // let delayVal = 0.5;

      // الوصول إلى العناصر باستخدام this.$refs
      this.solutions.forEach((solution, index) => {
        const refEl = this.$refs[solution.id];

        if (refEl) {
          gsap.to(refEl, {
            text: solution.title,
            duration: 1,
            delay: index * 0.5,
            ease: "power1.in",
          });
        }
      });
    },
    showCirclesHandler() {
      this.showCircles(this.circlesOpacity, 0);
    },
  },
};
</script>

<style scoped>
#solutions {
  background-color: #fcede6;
}

.card-title h1 {
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
  position: relative;
  padding-top: 10px;
}

.horizontal-card .card-title:not(.dummy-item) {
  position: absolute;
  top: 10px;
}
.horizontal-card .card-title.dummy-item {
  visibility: hidden;
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
  .col-image {
    width: 80%;
  }
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

  .horizontal-card .card-title:not(.dummy-item) {
    top: 5px;
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
