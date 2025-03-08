<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 0;
}
.card-header {
  background-color: transparent;
  border-bottom: 0;
}
.card-footer {
  background-color: transparent;
  border-top: 0;
}
</style>
