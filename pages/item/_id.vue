<template>
  <div>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="getImageSrc(product.image)" :alt="product.name" />
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <!-- Add more details as needed -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from '#app';
import { useAsyncData } from '#app';

// Import images
import leather1 from '@/assets/leather1.png';
import leather2 from '@/assets/leather2.png';
import leather3 from '@/assets/leather3.png';
import leather4 from '@/assets/leather4.png';
import leather5 from '@/assets/leather5.png';
import leather6 from '@/assets/leather6.png';
import leather7 from '@/assets/leather7.png';
import leather8 from '@/assets/leather8.png';

const route = useRoute();

const images = {
  'leather1.png': leather1,
  'leather2.png': leather2,
  'leather3.png': leather3,
  'leather4.png': leather4,
  'leather5.png': leather5,
  'leather6.png': leather6,
  'leather7.png': leather7,
  'leather8.png': leather8,
};

const getImageSrc = (imageName) => {
  return images[imageName] || '/images/placeholder.png';
};

const { data: product, error } = await useAsyncData('product', () =>
  fetch(`/api/products/${route.params.id}`).then((res) => res.json())
);
</script>

<style lang="scss" scoped></style>
