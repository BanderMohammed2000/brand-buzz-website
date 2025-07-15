<template>
  <footer id="contact-us">
    <div class="container">
      <div class="row mt-5 mt-lg-0">
        <div class="col">
          <div class="row">
            <div class="col-sm-6">
              <div class="wrapper card-title">
                <h3 class="split-text" ref="splitText"></h3>
              </div>
            </div>
            <div class="col-sm-6 text-sm-end">
              <base-button mode="outline" color="#ffffff" borderColor="#ffffff"
                >Contact Us</base-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 ps-2 ps-lg-0">
        <div class="col-lg-3 col-6 col-md-4 my-auto col-icon">
          <div>
            <div class="d-flex">
              <base-logo></base-logo>
              <h6>BrandBuzz</h6>
            </div>
            <ul class="list-inline mt-4 ms-2">
              <li class="list-inline-item logo">
                <a href="#"
                  ><img
                    src="/icons/facebook.png"
                    alt="facebook-logo"
                    loading="lazy"
                /></a>
              </li>
              <li class="list-inline-item logo">
                <a href="#"
                  ><img
                    src="/icons/instagram.png"
                    alt="instagram-logo"
                    loading="lazy"
                /></a>
              </li>
              <li class="list-inline-item logo">
                <a href="#"
                  ><img src="/icons/twitter.png" alt="X-logo" loading="lazy"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-6 col-md">
          <unordered-list :items="companyItems"></unordered-list>
        </div>
        <div class="col-lg-3 col-6 col-md-4">
          <unordered-list :items="designsItems"></unordered-list>
        </div>
        <div class="col-lg-3 col-6 col-md-4">
          <unordered-list :items="resourcesItems"></unordered-list>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center copy-right">
          <p class="mt-4 mb-0">
            All rights reserved <span id="date">{{ getCurrentDate }}</span>
            ©
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { isInViewport } from "../../utils/viewport";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
export default {
  data() {
    return {
      rawMessage: "Ready to get started?",
      companyItems: ["Company", "About", "Contact", "Careers", "Team"],
      designsItems: [
        "Designs",
        "1-to-1 Projects",
        "Find a designer",
        "Discover inspiration",
        "Pricing",
      ],
      resourcesItems: [
        "Become a designer",
        "Blog",
        "Design without borders",
        "99awards",
        "Affiliates",
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

        const chars = message.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          el.appendChild(span);
        });

        gsap.fromTo(
          el.children,
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
    getCurrentDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  background-color: #fcede6;
  margin-top: 100px;
}
.col > div {
  align-items: center;
  flex-wrap: wrap;
  background-color: #e85f19;
  color: #ffffff;
  height: 95px;
  margin: auto;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 15px 35px;
  position: relative;
  top: -50%;
}

h6 {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 0;
  padding-top: 6px;
}

.list-inline-item.logo {
  margin-right: 13px;
}

.copy-right {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e85f19;
  color: #ffffff;
  height: 100px;
  clip-path: ellipse(51% 87% at 50% 112%);
}

@media (max-width: 991.98px) {
  .col-icon {
    padding: 0;
  }
  .col > div h3 {
    font-size: 22px;
  }
}

@media (max-width: 767.98px) {
  .col > div {
    padding: 15px 10px;
  }

  .col > div h3 {
    font-size: 16px;
  }

  .col > div .outline {
    font-size: 14px;
    padding: 0.5rem 1rem;
    margin-bottom: 5px;
  }
}

@media (max-width: 575.98px) {
  .col > div {
    text-align: center;
    height: 100px;
  }
  .col > div h3 {
    font-size: 17px;
  }
  .col > div .outline {
    margin-top: 5px;
  }
}
</style>
