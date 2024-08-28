<template>
<section
  class="ezy__header11 light py-24 md:py-44 bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:bg-[#0b1727] text-indigo-100 dark:text-white relative z-10 overflow-hidden"
>
  <svg
    class="absolute right-0 top-0 text-gray-50 dark:text-slate-100 dark:text-opacity-30 -z-10"
    width="686"
    height="630"
    viewBox="0 0 686 630"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="403.5" cy="231.894" rx="403.5" ry="397.98" fill="currentColor" />
  </svg>

  <div class="container px-4 mx-auto relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-6 xl:col-span-5 xl:pr-12 text-center lg:text-start">
        <div class="flex flex-col justify-center h-full">
          <h2 class="text-3xl font-bold md:text-[70px] leading-none mb-6">We at leatherman believe in quality</h2>
          <p class="text-[22px] leading-normal opacity-80">
           Whether you're braving the elements or stepping out for a casual day, the Leatherman jacket offers unparalleled comfort and a sleek
          </p>
          <div>
            <a
              href=""
              class="bg-black dark:bg-slate-900 shadow-xl rounded py-3 px-8 text-xl mt-6 md:mt-12 inline-block"
              >contact<span class="fas fa-arrow-right ml-2"></span
            ></a>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 xl:col-span-5 text-center lg:text-start">
        <img
          src="@/assets/image1.png"
          alt=""
          class="rounded max-w-full h-full mt-4"
        />
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'AboutComponent',
};
</script>

<style lang="scss" scoped>
.about__header {
  // Add any specific styles for the About component here
}
</style>
