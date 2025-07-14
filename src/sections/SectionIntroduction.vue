<template>
  <div class="container-fluid mt-4 mt-lg-0">
    <div class="row">
      <div class="col-lg-5 my-auto">
        <base-card class="mb-3">
          <div class="card-body">
            <!-- <h1 class="card-title">
              We create <span class="orange-color">solutions</span> for your
              business
            </h1> -->
            <div class="wrapper card-title">
              <!-- <p class="typewriter" ref="typewriterText"></p> -->
              <h1 class="split-text" ref="splitText"></h1>
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
        <!-- <div class="img"></div> -->
        <!-- <img :src="`/images/${img}`" class="img" ref="headerImg" /> -->
        <img src="/images/starting-business.svg" class="img" />

        <!-- <div class="image-container">
          <img
            src="/images/starting-business-hidden.svg"
            alt="Hidden"
            class="image base-image"
          />
          <img
            src="/images/starting-business.svg"
            alt="Visible"
            class="image overlay-image"
            :class="{ visible: isVisible }"
          />
        </div> -->

        <!-- <div class="image-wrapper">
          <img :src="currentImage" alt="animated image" class="image-fade" />
        </div> -->
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
      isVisible: false,
      // currentImage: "/images/starting-business-hidden.svg",

      // img: "starting-business-hidden.svg",
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

      // عنصر مؤقت لتحويل HTML string إلى DOM nodes
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = message;

      // نضيف كل عناصر tempDiv المفصولة إلى العنصر المستهدف
      tempDiv.childNodes.forEach((node) => {
        el.appendChild(splitNode(node));
      });

      // تطبيق أنيميشن gsap على كل الـ spans داخل el
      const spans = el.querySelectorAll("span");
      gsap
        .fromTo(
          spans,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out",
          }
        )
        .then(() => {
          this.changeImage();
        });
    },
    changeImage() {
      setTimeout(() => {
        this.isVisible = true;
      }, 100); // يمكنك تعديل الزمن

      // setTimeout(() => {
      //   this.currentImage = "/images/starting-business.svg";
      // }, 1000);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  transform: translateY(-20px);
}
.card-title {
  /* width: 390px; */
  width: 370px;
}
.card-title h1 {
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
}

.img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* .image-container {
  position: relative;
  height: 470px;
}
.image {
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.base-image {
  z-index: 1;
}
.overlay-image {
  z-index: 2;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}
.overlay-image.visible {
  opacity: 1;
} */

/* .image-wrapper {
  width: 100%;
}

.image-fade {
  width: 100%;
  height: auto;
  transition: opacity 1.5s ease-in-out;
  opacity: 1;
} */

/* @media (min-width: 992px) and (max-width: 1088px) {
} */

@media (max-width: 991.98px) {
  .container-fluid {
    transform: translateY(0);
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
}
</style>
