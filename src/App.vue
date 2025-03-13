<template>
  <the-header></the-header>
  <section-services></section-services>
  <section-solutions></section-solutions>
  <section-agency></section-agency>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SectionServices from "./sections/SectionServices.vue";
import SectionSolutions from "./sections/SectionSolutions.vue";
import SectionAgency from "./sections/SectionAgency.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    SectionServices,
    SectionSolutions,
    SectionAgency,
    TheFooter,
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

header,
section {
  padding-left: 65px;
  padding-right: 65px;
  position: relative;
}

.orange-color {
  color: #e85f19;
}

@media (max-width: 575.98px) {
  header,
  section {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
