<template>
  <header>
    <nav class="navbar navbar-expand-lg pt-3 pb-1 pb-lg-0">
      <div class="container-fluid">
        <a class="navbar-brand d-flex me-5" href="index.html">
          <base-logo></base-logo>
          BrandBuzz
        </a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <i class="fa-solid fa-bars fa-lg" v-if="!isMenuOpen"></i>
          <i class="fa-solid fa-x fa-lg" v-else></i>
        </button> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span v-if="!isMenuOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z"
                fill="white"
              />
            </svg>
          </span>

          <span class="x-icon" v-else>
            <span></span>
            <span></span>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#agency">Our agency</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#contact-us">Contact us</a>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="">
            <base-button type="submit"> Sign Up </base-button>
          </form>
        </div>
      </div>
    </nav>
    <multiple-circles
      top="30px"
      left="-34px"
      :opacity1="circlesOpacity.opacity1"
      :opacity2="circlesOpacity.opacity2"
      :opacity3="circlesOpacity.opacity3"
      :opacity4="circlesOpacity.opacity4"
      :opacity5="circlesOpacity.opacity5"
    ></multiple-circles>
    <section-introduction></section-introduction>
    <multiple-circles
      bottom="0"
      right="-90%"
      transform="rotate(181deg)"
      :opacity1="circlesOpacitySecond.opacity1"
      :opacity2="circlesOpacitySecond.opacity2"
      :opacity3="circlesOpacitySecond.opacity3"
      :opacity4="circlesOpacitySecond.opacity4"
      :opacity5="circlesOpacitySecond.opacity5"
    ></multiple-circles>
  </header>
</template>

<script>
import SectionIntroduction from "../../sections/SectionIntroduction.vue";
export default {
  components: {
    SectionIntroduction,
  },
  data() {
    return {
      circlesOpacity: {
        opacity1: false,
        opacity2: false,
        opacity3: false,
        opacity4: false,
        opacity5: false,
      },
      circlesOpacitySecond: {
        opacity1: false,
        opacity2: false,
        opacity3: false,
        opacity4: false,
        opacity5: false,
      },
      isMenuOpen: false,
    };
  },
  mounted() {
    this.showCircles(this.circlesOpacity, 2500);

    const onScroll = () => {
      if (window.scrollY >= 300 && window.scrollY <= 400) {
        this.showCircles(this.circlesOpacitySecond, 0);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    showCircles(circlesObject, timeValue) {
      const keys = Object.keys(circlesObject);
      let time = timeValue;
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        setTimeout(() => {
          circlesObject[key] = +true;
        }, time);
        time += 300;
      }
    },

    // scroll(){
    //   window.addEventListener("scroll")
    // };
  },
};
</script>

<style scoped>
.navbar .navbar-brand,
.nav-item .nav-link {
  font-weight: 500;
}
/* button.navbar-toggler {
  border: none;
}
button.navbar-toggler:focus {
  box-shadow: none;
} */

button.navbar-toggler {
  position: relative;
  color: #ffffff;
  background-color: #e85f19;
  height: 41px;
  width: 45px;
  border: 2px solid #ffffff75;
}

button.navbar-toggler:focus {
  box-shadow: none;
}

.x-icon {
  position: absolute;
  color: #ffffff;
  left: 11px;
}
.x-icon span {
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 5px;
  background-color: #ffffff;
}

.x-icon span:first-child {
  transform: rotate(-50deg);
}

.x-icon span:last-child {
  transform: rotate(50deg);
}
.nav-item .nav-link {
  color: #000000;
}
.nav-item .nav-link.active {
  color: #e85f19;
}
.nav-item .nav-link:hover {
  color: #e85f19;
}

@media (max-width: 991.98px) {
  ul.navbar-nav {
    align-items: center;
  }
  form.d-flex {
    justify-content: center;
  }
}

@media (max-width: 575.98px) {
  ul.navbar-nav {
    align-items: flex-start;
  }
  form.d-flex {
    justify-content: flex-start;
  }
  ul.navbar-nav,
  form.d-flex {
    margin-left: 12px;
  }
}
</style>
