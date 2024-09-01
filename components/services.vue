<template>
    <div>
<section
  class="ezy__featured30 light py-14 md:py-24 bg-black dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10"
>
  <div class="container px-4 mx-auto">
    <div
      class="absolute top-36 right-[20%] bottom-0 w-[80vw] bg-center bg-no-repeat bg-cover min-h-[350px] lg:h-full lg:w-[60vw] lg:right-[40%] -z-10"
      style="
        background-image: url(https://cdn.easyfrontend.com/pictures/featured/featured_13.png);
      "
    ></div>

    <div class="grid grid-cols-12">
      <div
        class="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 text-center lg:text-start"
      >
        <div class="bg-gray-50 dark:bg-slate-700 p-12" data-aos="fade-up"
     data-aos-duration="3000">
          <h2 class="text-2xl leading-snug md:text-[40px] mb-6">
           Discover the Leatherman Jacket: Unmatched Durability and Style
          </h2>
          <p class="text-lg leading-normal opacity-80">
           At Leatherman, we believe in crafting jackets that blend exceptional durability with timeless style. Our jackets are designed for those who demand the best, combining high-quality materials with expert craftsmanship
          </p>
          <div class="mt-12">
            <nuxt-link to="/about"
              
              class="animate-gradient hover:bg-opacity-90 text-white border  rounded transition py-3 px-7 font-normal mb-6 sm:mb-0"
              >Read more
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background: linear-gradient(270deg, #181717, #3f3d3d, #948e8e, #d4cfc5);
  background-size: 600% 600%;
  animation: gradient 10s ease infinite;
  min-height: 30px; /* You can adjust this value to control the height */
}
</style>