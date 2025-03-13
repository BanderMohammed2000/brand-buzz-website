<template>
  <ul class="list-unstyled">
    <li v-for="(item, index) in items" :key="index">
      <a href="#">{{ item }}</a>
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
.list-unstyled li:first-child a {
  font-weight: 700;
  font-size: 16px;
}
.list-unstyled li a {
  text-decoration: none;
  color: #000000;
  font-size: 14px;
}
</style>
