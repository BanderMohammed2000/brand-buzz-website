<template>
  <header>
    <nav class="navbar navbar-expand-lg pt-3 pb-1 pb-lg-0">
      <div class="container-fluid">
        <a class="navbar-brand d-flex me-5" href="index.html">
          <base-logo></base-logo>
          BrandBuzz
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            class="fa-solid fa-bars fa-lg"
            @click="toggleMenu"
            v-if="!isMenuOpen"
          ></i>
          <i class="fa-solid fa-x fa-lg" @click="toggleMenu" v-else></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#contact-us">Contact us</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="">
            <base-button type="submit"> Sign Up </base-button>
          </form>
        </div>
      </div>
    </nav>
    <multiple-circles top="30px" left="-34px"></multiple-circles>
    <section-introduction></section-introduction>
    <multiple-circles
      bottom="0"
      right="-90%"
      transform="rotate(181deg)"
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
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar .navbar-brand,
.nav-item .nav-link {
  font-weight: 500;
}
button.navbar-toggler {
  border: none;
}
button.navbar-toggler:focus {
  box-shadow: none;
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
