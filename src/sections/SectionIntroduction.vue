<template>
  <div class="container-fluid mt-4 mt-lg-0">
    <div class="row">
      <div class="col-lg-5 my-auto">
        <base-card class="mb-3">
          <div class="card-body">
            <div class="wrapper card-title">
              <h1 class="split-text" ref="splitText"></h1>
              <h1 class="split-text dummy-item">
                We create <span class="orange-color">solutions</span> for your
                business
              </h1>
            </div>
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
        <img
          src="/images/starting-business.svg"
          class="img mt-5 mt-lg-0"
          alt="starting-business"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { splitNode } from "../utils/splitnode";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  data() {
    return {
      rawMessage: `We create <span class="orange-color">solutions</span> for your business`,
    };
  },
  mounted() {
    document.fonts.ready.then(() => {
      this.runSplitTextAnimation();
    });
  },
  methods: {
    runSplitTextAnimation() {
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
    },
  },
};
</script>

<style scoped>
.container-fluid {
  transform: translateY(-20px);
}

.card-title {
  position: relative;
}

.card-title h1.split-text {
  font-weight: 700;
  width: 370px;
}

.card-title h1.split-text:not(.dummy-item) {
  position: absolute;
}

.card-title h1.split-text.dummy-item {
  visibility: hidden;
}

.card-text {
  color: #6d6d6d;
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 991.98px) {
  .container-fluid {
    transform: translateY(0);
  }
}

@media (max-width: 767.98px) {
  .card-title h1.split-text {
    width: 300px;
  }
}

@media (max-width: 575.98px) {
  .card-title h1.split-text {
    width: 100%;
  }
}
</style>
