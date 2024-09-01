<template>
  <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-3xl sm:max-w-full">
    <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium leather</h2>

    <div v-if="loading" class="text-center text-gray-500">
      Loading products...
    </div>

    <div v-else-if="paginatedProducts.length === 0" class="text-center text-gray-500">
      No products available.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
      <div
        v-for="product in paginatedProducts"
        :key="product.id"
        class="bg-white shadow-5-strong rounded border overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
        @click="viewProductDetails(product)"
      >
      <div class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
        <div class="w-full aspect-w-16 aspect-h-8 lg:h-80  ">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-contain object-top"
          />
        </div>

        <div class="p-4   ">
        <hr >
          <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
         <div class="mt-4 block gap-2">
  <h4 class="text-lg font-bold text-gray-800">{{ product.price }}</h4>
   <p class="text-sm text-gray-600">{{ product.description }}</p>
  <div class="ml-[-40px] mt-[-30px]"><Starrating /></div>
  </div>
    <NuxtLink
            :to="{ name: 'item-details-id', params: { id: product.id } }"
            @click="viewProductDetails(product)"
          >
            <button class="mt-[20] w-[150px] py-2  text-white rounded-full hover:bg-gradient-to-r bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r transition-colors">
              View Details
            </button>
          </NuxtLink>
</div>
          
        
        </div>
      </div>
    </div>

    <Pagination
      v-if="!loading && paginatedProducts.length > 0"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:page="(page) => (currentPage = page)"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';
import Pagination from '@/components/Pagination.vue';
import Starrating from '@/components/Starrating.vue';

const router = useRouter();
const productStore = useProductStore();
const { setProducts, setSelectedProduct } = productStore;

const loading = ref(true);
const currentPage = ref(1);
const itemsPerPage = 9;

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return productStore.products.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(productStore.products.length / itemsPerPage);
});

const fetchProducts = async () => {
  try {
    const { data, error } = await useFetch('/api/products');
    if (error.value) {
      console.error('Error fetching products:', error.value);
    } else if (data.value) {
      localStorage.setItem('products', JSON.stringify(data.value));
      setProducts(data.value);
    } else {
      console.error('No data received');
    }
  } catch (err) {
    console.error('Error during fetch:', err);
  } finally {
    loading.value = false;
  }
};

const viewProductDetails = (product) => {
  setSelectedProduct(product);
  router.push({ name: 'item-details-id', params: { id: product.id } });
};

onMounted(() => {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    setProducts(JSON.parse(storedProducts));
    loading.value = false;
  } else {
    fetchProducts();
  }
});
</script>
