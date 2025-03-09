<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-2">
        <slot name="img"></slot>
      </div>
      <div class="col-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: transparent;
  border: 0;
  padding-left: 16px;
}
.col-2 {
  width: fit-content;
}
</style>
