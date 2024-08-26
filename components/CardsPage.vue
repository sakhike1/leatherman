<template>
  <div>
    <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-3xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium leather</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="bg-white rounded bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
        >
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img
              :src="getImageSrc(product.image)"
              :alt="product.name"
              class="h-full w-full object-cover object-top"
            />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">{{ product.price }}</h4>
            </div>
            <!-- Button added here -->
            <button
              class="mt-4 w-full py-2 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white rounded hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black transition-colors"
              @click="handleButtonClick(product.id)"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination Component -->
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:page="(page) => (currentPage = page)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useFetch } from "#app";
import Pagination from "@/components/Pagination.vue";

// Import images
import leather1 from "@/assets/leather1.png";
import leather2 from "@/assets/leather2.png";
import leather3 from "@/assets/leather3.png";
import leather4 from "@/assets/leather4.png";
import leather5 from "@/assets/leather5.png";
import leather6 from "@/assets/leather6.png";
import leather7 from "@/assets/leather7.png";
import leather8 from "@/assets/leather8.png";

const products = ref([]);
const currentPage = ref(1);
const itemsPerPage = 8;

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
  return images[imageName] || "/images/placeholder.png"; // Provide a default image if needed
};

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage);
});

const handleButtonClick = (id) => {
  // Handle button click, e.g., navigate to a product details page or show a modal
  console.log(`Button clicked for product ID: ${id}`);
};

onMounted(async () => {
  const { data } = await useFetch("/api/products");
  products.value = data.value;
});
</script>

<style lang="scss" scoped></style>
