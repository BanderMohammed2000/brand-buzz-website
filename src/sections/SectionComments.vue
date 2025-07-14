<template>
  <section id="comments" class="mb-5">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <base-card class="mt-b">
            <div class="card-body">
              <!-- <h1 class="card-title">
                What <span class="orange-color">Clients</span> Say!
              </h1> -->
              <div class="wrapper card-title">
                <h1 class="split-text" ref="splitText"></h1>
              </div>
              <p class="card-text mt-3 mb-0">
                See How Our Digital Marketing Agency Helped
              </p>
              <p class="card-text">Clients Achieve Their Goals</p>
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
  },
};
</script>

<style scoped>
.card-title h1 {
  font-weight: 700;
}
.card-text {
  color: #6d6d6d;
}
</style>
