<template>
  <ul class="list-unstyled">
    <li v-for="(item, index) in items" :key="index">
      <a href="#" v-if="index !== 0">{{ item }}</a>
      <p v-else class="mb-0">{{ item }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-unstyled li:first-child {
  font-weight: 700;
  font-size: 16px;
  color: #000000;
}
.list-unstyled li:not(:first-child) a {
  text-decoration: none;
  color: #4d4c4c;
  font-size: 14px;
  transition: all 0.3s ease;
}

.list-unstyled li:not(:first-child) a:hover {
  color: #000000;
}
</style>
