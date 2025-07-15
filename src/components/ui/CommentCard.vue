<template>
  <div class="card rounded-3">
    <div class="card-body">
      <div class="d-flex align-items-center pt-2">
        <img :src="data.image" :alt="data.name" loading="lazy" />
        <div>
          <h6 class="card-title mb-0">{{ data.name }}</h6>
          <span class="text-secondary">{{ data.jop }}</span>
        </div>
      </div>
      <p class="card-text mt-3 mb-3">{{ data.text }}</p>
      <div>
        <ul class="list-inline rating">
          <li
            class="list-inline-item me-1"
            v-for="star in data.rating"
            :key="star"
          >
            <i class="fa-solid fa-star"></i>
          </li>
          <li
            class="list-inline-item me-1 gray-color"
            v-for="star in 5 - data.rating"
            :key="star"
          >
            <i class="fa-solid fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15),
    -1px -1px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
  height: 203px;
  margin: 0 0.5em;
  border: 0;
}
.card img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
}
.card-title {
  color: #e85f19;
  font-weight: 700;
}
.card-title,
.text-secondary {
  font-size: 15px;
}
.card-text {
  color: #6d6d6d;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rating {
  color: #f3af41;
}

.gray-color {
  color: #c2c2c2;
}

@media (max-width: 991.98px) {
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
