<template>
  <!-- <div
    class="container-circles"
    :style="{ transform, top, right, bottom, left }"
  ></div> -->

  <div
    class="multiple-circles"
    :style="{ transform, top, right, bottom, left }"
  >
    <div class="circle-1"></div>
    <div class="circle-2"></div>
    <div class="circle-3"></div>
    <div class="circle-4"></div>
    <div class="circle-5"></div>
  </div>
</template>

<script>
export default {
  props: ["transform", "top", "right", "bottom", "left"],
};
</script>

<style scoped>
/* .container-circles {
  position: absolute;
} */
.multiple-circles {
  position: relative;
  width: 140px;
  height: 120px;
  /* background-color: red; */
}

.multiple-circles div {
  position: absolute;
}

.multiple-circles div:not(:first-child) {
  background-color: #f4b290;
}

.circle-1 {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #f09365;
  left: 50px;
}
.circle-2 {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: black;
  left: 3px;
  top: 38%;
}

.circle-3 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  bottom: 0;
}

.circle-4 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  top: 58%;
  left: 46%;
}

.circle-5 {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: black;
  top: 53%;
  right: 0;
}

@media (max-width: 991.98px) {
  .multiple-circles {
    display: none;
  }
}
</style>
