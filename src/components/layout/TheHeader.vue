<template>
  <header>
    <nav class="navbar navbar-expand-lg pt-3">
      <div class="container-fluid">
        <a class="navbar-brand d-flex me-5" href="#">
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">Contact us</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form class="d-flex">
            <base-button type="submit"> Sign Up </base-button>
          </form>
        </div>
      </div>
    </nav>
    <section-introduction></section-introduction>
  </header>
</template>

<script>
import SectionIntroduction from "../../sections/SectionIntroduction.vue";
export default {
  components: {
    SectionIntroduction,
  },
};
</script>

<style scoped>
.navbar .navbar-brand,
.nav-item .nav-link {
  font-weight: 500;
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
</style>
