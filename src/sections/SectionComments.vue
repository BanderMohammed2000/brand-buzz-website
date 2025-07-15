<template>
  <section id="comments" class="mb-5">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <base-card class="mt-b">
            <div class="card-body">
              <div class="wrapper card-title">
                <h1 class="split-text" ref="splitText"></h1>
              </div>
              <p class="card-text mt-3">
                See How Our Digital Marketing Agency Helped Clients Achieve
                Their Goals
              </p>
            </div>
          </base-card>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <carousel-slider></carousel-slider>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CarouselSlider from "../components/ui/CarouselSlider.vue";
import { isInViewport } from "../utils/viewport";
import { splitNode } from "../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
export default {
  components: {
    CarouselSlider,
  },
  data() {
    return {
      rawMessage: `What <span class="orange-color">Clients</span> Say!`,
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      window.addEventListener("scroll", this.checkVisibility);
      // تأكد أيضاً عند التحميل الأول
      this.checkVisibility();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
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
  },
};
</script>

<style scoped>
.card-title h1 {
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
  width: 40%;
  margin: auto;
}

@media (max-width: 991.98px) {
  .card-text {
    width: 60%;
  }
}

@media (max-width: 767.98px) {
  .card-text {
    width: 80%;
  }
}

@media (max-width: 575.98px) {
  .card-text {
    width: 90%;
  }
}
</style>
