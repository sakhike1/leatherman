<template>
  <div class="font-[sans-serif] p-20">
    <div 
      class="grid md:grid-cols-2 items-center gap-10 max-w-7xl max-md:max-w-md mx-auto"
    >
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        class="md:h-[400px]  from-gray-900 to-gray-600 bg-gradient-to-r"
      >
        <img
          :src="currentImage"
          class="w-full h-full rounded-md object-contain"
          alt="Leather Jacket"
        />
      </div>

      <div class="max-md:text-center">
        <h3 class="text-black font-semibold md:text-3xl text-2xl md:leading-10">
          Save Now on Luxury Leather Jackets and Sheepskin Coats
        </h3>
        <p class="text-gray-500 mt-4 text-sm leading-relaxed">
          Leather jacket for man, made with high quality leather and front zipper closure.
          It is made of a very comfortable fabric.
        </p>
        <nuxt-link  to="service" class="mt-8">
        <button
          type="button"
          class="w-48 px-5 py-2.5 mt-8 bg-black hover:bg-gray-700 text-white tracking-wider rounded text-sm outline-none"
        >
          Explore
        </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "~/assets/image1.png";
import image2 from "~/assets/image2.png";
import image3 from "~/assets/image3.png";
import image4 from "~/assets/image4.png";

export default {
  data() {
    return {
      images: [image1, image2, image3, image4],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    rotateImages() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
  mounted() {
    this.imageInterval = setInterval(this.rotateImages, 3000); // Change image every 3 seconds
  },
  beforeDestroy() {
    clearInterval(this.imageInterval); // Clear interval when component is destroyed
  },
};
</script>

<style lang="scss" scoped></style>
