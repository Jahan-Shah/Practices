<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["pid"]);
const route = useRoute();
const products = inject("products");

const selectedProduct = computed(() =>
  products.value.find((product) => product.id === props.pid)
);
const title = selectedProduct.title;
const price = selectedProduct.price;
const description = selectedProduct.description;
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
