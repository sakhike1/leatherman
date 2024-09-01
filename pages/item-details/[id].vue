<template>
<div>
  <div v-if="selectedProduct" class="p-8">
   <PromoComponent />
    <Navigation />
   
   
    <h1 class="text-4xl font-extrabold text-gray-800 mb-4">{{ selectedProduct.name }}</h1>
    <div class="flex flex-wrap">
      <img
        :src="selectedProduct.image"
        :alt="selectedProduct.name"
        class="w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-lg"
      />
      <div class="w-full sm:w-1/2 sm:pl-8">
        <h2 class="text-2xl font-bold text-gray-700 mt-4 sm:mt-0">{{ selectedProduct.price }}</h2>
        <p class="mt-4 text-gray-600">
          <!-- You can add more product details here -->
        </p>
        <starrating />
      </div>
    </div>
  </div>

  <div v-else class="text-center text-gray-500">
    Loading product details...
  </div>
   <Footer/>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/productStore';
import Starrating from '@/components/Starrating.vue';

const route = useRoute();
const productStore = useProductStore();

const selectedProduct = computed(() =>
  productStore.getProductById(Number(route.params.id))
);

onMounted(() => {
  console.log('Route ID:', route.params.id);
  console.log('Products:', productStore.products);

  if (!selectedProduct.value) {
    console.error('Product not found');
  } else {
    console.log('Selected Product:', selectedProduct.value);
  }
});

</script>
