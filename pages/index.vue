<template>
  <div>
    <NuxtRouteAnnouncer />
    <promo-component></promo-component>
    <Navigation />
    <HeroPage />
    <CardsPage />
    <Carousel />
    <SubScribe />
    <testimonial />
    <images-page />
    <SlidePage />
    <PromoPopup ref="promoPopupRef" />
    <scrollToTop />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PromoPopup from '~/components/PromoPopup.vue'

// Define reactive variables
const showPopup = ref(false)
const promoPopupRef = ref(null)
const email = ref('')
const name = ref('')

// Simulate data fetching
const fetchData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate data fetching
}

// Functions to control the popup
const closePopup = () => {
  showPopup.value = false
}

const submitForm = () => {
  console.log(`Email: ${email.value}, Name: ${name.value}`)
  closePopup()
}

// Show the popup after data is fetched
onMounted(async () => {
  await fetchData()
  if (promoPopupRef.value) {
    showPopup.value = true // Show the popup after 2 seconds
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
