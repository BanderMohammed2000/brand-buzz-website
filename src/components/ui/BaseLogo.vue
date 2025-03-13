<template>
  <div class="logo mx-4">
    <span class="circle-left circle"></span>
    <span class="circle-right circle"></span>
    <span class="circle-bottom circle"></span>
  </div>
</template>

<style scoped>
/*Start Logo*/
.logo {
  position: relative;
  display: inline;
}
.logo .circle {
  background-color: #e85f19;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
}
.logo .circle-left {
  left: -14px;
}
.logo .circle-bottom {
  top: 12px;
  right: -13px;
}
/*End Logo*/
</style>
