<template>
  <section id="services">
    <div class="container-fluid mt-5 mt-lg-4 mb-5 px-4">
      <div class="row mb-3">
        <div class="col text-center">
          <base-card>
            <div class="card-body pt-3 pt-lg-0">
              <div class="wrapper card-title">
                <h1 class="split-text" ref="splitText"></h1>
              </div>
              <p id="card-text" class="card-text mt-3 mx-auto">
                Let us unleash the full potential of your business with our
                data-driven strategies
              </p>
            </div>
          </base-card>
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
                ref="square"
                :style="{ backgroundColor: service.color }"
              >
                <img
                  :src="`/icons/${service.icon}.png`"
                  ref="icon"
                  alt="icon"
                />
              </div>
            </template>
            <div class="card-body">
              <h2 class="card-title" :ref="service.id"></h2>
              <h2 class="card-title dummy-item">{{ service.title }}</h2>
              <p class="card-text mx-auto">
                {{ service.text }}
              </p>
            </div>
            <template v-slot:footer>
              <base-button mode="outline button-small">Read More</base-button>
            </template>
          </base-card>
        </div>
      </div>
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
      rawMessage: `We Provide The Best <span class="orange-color">Services</span>`,
      services: [
        {
          id: "seo-sem",
          title: "Seo/Sem",
          text: "Boosting visibility with SEO and SEM for higher traffic and conversions",
          color: "#f1c00c",
          icon: "analysis",
        },
        {
          id: "marketing",
          title: "Marketing",
          text: "Driving engagement and growth through strategic and effective marketing",
          color: "#02ea6a",
          icon: "mobile-marketing",
        },
        {
          id: "viral-campaign",
          title: "Viral Campaign",
          text: "Creating buzz and rapid engagement through strategic viral campaigns",
          color: "#876fed",
          icon: "web-promotion",
        },
        {
          id: "others",
          title: "Others",
          text: "Providing tailored solutions to meet diverse business needs effectively",
          color: "#f43a01",
          icon: "solution",
        },
      ],
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      this.checkVisibility();
    });
    window.addEventListener("scroll", this.executeAnimationOnCard);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
    window.removeEventListener("scroll", this.executeAnimationOnCard);
  },
  methods: {
    checkVisibility() {
      const el = this.$refs.splitText;
      if (el && isInViewport(el)) {
        const message = this.rawMessage;
        const el = this.$refs.splitText;
        el.innerHTML = "";

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = message;

        tempDiv.childNodes.forEach((node) => {
          el.appendChild(splitNode(node));
        });

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
    executeAnimationOnCard() {
      const cardText = document.getElementById("card-text");
      if (cardText && isInViewport(cardText)) {
        this.showServicesTitles();
        this.expandSquare().then(() => {
          this.showIcon();
        });
        window.removeEventListener("scroll", this.executeAnimationOnCard);
      }
    },
    showServicesTitles() {
      this.services.forEach((service) => {
        const refEl = this.$refs[service.id];
        if (refEl) {
          gsap.to(refEl, {
            text: service.title,
            duration: 1.5,
            ease: "power1.in",
          });
        }
      });
    },
    expandSquare() {
      const el = this.$refs.square;
      return gsap.to(el, {
        width: "70px",
        duration: 1.5,
        ease: "power2.out",
      });
    },
    showIcon() {
      const icons = this.$refs.icon;
      icons.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(
            icon,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              delay: index * 0.4,
              ease: "power2.out",
            }
          );
        }
      });
    },
  },
  computed: {
    backgroundColor() {
      return this.service.color;
    },
  },
};
</script>

<style scoped>
.card-title h1 {
  font-weight: 700;
}

.col .card-text {
  color: #6d6d6d;
  width: 385px;
}

.service-card .card-body {
  position: relative;
}

.service-card .card-title {
  font-size: 1rem;
}

.service-card .card-title:not(.dummy-item) {
  position: absolute;
  top: 16px;
}
.service-card .card-title.dummy-item {
  visibility: hidden;
}

.service-card .square {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 0;
  height: 66px;
  border-radius: 7% 25% 26% 1% / 5% 33% 36% 27%;
}

.service-card .square img {
  width: 50px;
  opacity: 0;
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
