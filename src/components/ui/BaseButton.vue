<template>
  <button :class="mode">
    <slot></slot>
  </button>
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
button {
  display: inline-block;
  background-color: #e85f19;
  border: 1px solid #e85f19;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.4rem 1.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in;
}

button:hover {
  background-color: #cf4f0f;
}

button.outline {
  background-color: transparent;
  color: #e85f19;
  box-shadow: none;
}

button.outline:hover {
  background-color: #f4f4f4;
}

.button-small {
  padding: 0.4rem 0.8rem;
  font-size: 13px;
  border-radius: 7px;
}
</style>
