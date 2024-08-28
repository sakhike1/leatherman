<template>
  <div v-if="product">
    <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-3xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">{{ product.name }}</h2>

      <div class="flex flex-col lg:flex-row gap-6">
        <div class="w-full lg:w-1/2">
          <img
            :src="getImageSrc(product.image)"
            :alt="product.name"
            class="h-full w-full object-cover object-top"
          />
        </div>

        <div class="w-full lg:w-1/2">
          <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
          <p class="mt-4 text-lg text-gray-600">{{ product.description }}</p>
          <h4 class="mt-4 text-xl font-bold text-gray-800">{{ product.price }}</h4>
          <button
            class="mt-4 py-2 px-4 bg-gradient-to-b from-gray-900 to-gray-600 text-white rounded hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black transition-colors"
            @click="addToCart(product.id)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice'; // Assuming this is the action to add an item to the cart
import { useFetch } from '@vueuse/core'; // Or adjust based on your setup

// Import images
import leather1 from "@/assets/leather1.png";
import leather2 from "@/assets/leather2.png";
import leather3 from "@/assets/leather3.png";
import leather4 from "@/assets/leather4.png";
import leather5 from "@/assets/leather5.png";
import leather6 from "@/assets/leather6.png";
import leather7 from "@/assets/leather7.png";
import leather8 from "@/assets/leather8.png";

const route = useRoute();
const product = ref(null);

const images = {
  "leather1.png": leather1,
  "leather2.png": leather2,
  "leather3.png": leather3,
  "leather4.png": leather4,
  "leather5.png": leather5,
  "leather6.png": leather6,
  "leather7.png": leather7,
  "leather8.png": leather8,
};

const getImageSrc = (imageName) => {
  const src = images[imageName] || "/images/placeholder.png";
  return src;
};

const dispatch = useDispatch();

const addToCart = (id) => {
  dispatch(addItem(id)); // Dispatch action to add item to cart
};

onMounted(async () => {
  const productId = route.params.id;
  try {
    const { data, pending, error } = await useFetch(`/api/products/${productId}`);
    if (error.value) {
      console.error("Error fetching product:", error.value);
    } else if (data.value) {
      product.value = data.value || {};
    } else {
      console.error("No data received");
    }
  } catch (err) {
    console.error("Error during fetch:", err);
  }
});
</script>

<style lang="scss" scoped></style>
