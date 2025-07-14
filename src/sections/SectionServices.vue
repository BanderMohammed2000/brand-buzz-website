<template>
  <section id="services">
    <div class="container-fluid mt-4 mb-5 px-4">
      <div class="row mb-3">
        <div class="col text-center">
          <base-card>
            <div class="card-body pt-3 pt-lg-0">
              <!-- <h1 class="card-title" ref="myElement">
                We Provide The Best <span class="orange-color">Services</span>
              </h1> -->
              <div class="wrapper card-title">
                <!-- <p class="typewriter" ref="typewriterText"></p> -->
                <h1 class="split-text" ref="splitText"></h1>
              </div>
              <p class="card-text mt-3 mx-auto">
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
                :style="{ backgroundColor: service.color }"
              >
                <!-- <span><i :class="service.icon"></i></span> -->
                <img
                  :src="`/icons/${service.icon}.png`"
                  alt="icon"
                  loading="lazy"
                />
              </div>
            </template>
            <div class="card-body">
              <h6 class="card-title">{{ service.title }}</h6>
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
  mounted() {
    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      // تأكد أيضاً عند التحميل الأول
      this.checkVisibility();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkVisibility);
  },
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

.service-card .square {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 70px;
  border-radius: 7% 25% 26% 1% / 5% 33% 36% 27%;
}

/* button.outline.button-small {
  background-color: #00000008;
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
