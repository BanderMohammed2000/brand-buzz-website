<template>
  <div class="card" :class="mode">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

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

.service-card {
  border-radius: 13px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15),
    -4px -4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  min-height: 230px;
}

.service-card .card-header {
  padding: 0;
}

/* .service-card .card-body,
.service-card .card-footer {
  margin-left: 12px;
  margin-right: 12px;
} */

@media (max-width: 991.98px) {
  .service-card {
    width: 95%;
  }
}

@media (max-width: 767.98px) {
  .service-card {
    width: 80%;
  }
}

/* @media (max-width: 575.98px) {
  .service-card {
    width: 80%;
  }
} */
</style>
