<template>
  <div v-if="showScrollButton" ref="scrollTopButton" class="fixed bottom-[400px] right-10 z-[999]">
    <button @click="scrollToTop" class="hover:scale-125 text-white font-bold py-2 px-4">
      <img class="h-10 w-10" :src="upArrowSrc" alt="Scroll to top" />  
    </button>
  </div>
</template>



<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import upArrow from '@/assets/up-arrow.png'; // Import the image directly

const showScrollButton = ref(false);
const upArrowSrc = ref(upArrow); // Use the imported image path

function handleScroll() {
  showScrollButton.value = window.scrollY > 0;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>



<style scoped></style>