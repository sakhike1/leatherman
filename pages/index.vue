<template>
  <div>
    <NuxtRouteAnnouncer />
    <promo-component></promo-component>
    <Navigation />
    <HeroPage />
    <CardsPage />
    <Carousel />
    <SubScribe />
    <testimonial/>
    <images-page/>
    
    <SlidePage />
  
    <Footer />
  </div>
</template>

<script>
import ImagesPage from '~/components/ImagesPage.vue';
import Testimonial from '~/components/testimonial.vue';
export default {
  components: { ImagesPage, Testimonial },};
</script>

<style lang="scss" scoped></style>
