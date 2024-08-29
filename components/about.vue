<template>
  <section
    class="ezy__header11 light py-24 md:py-44 bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:bg-[#0b1727] text-indigo-100 dark:text-white relative z-10 overflow-hidden"
  >
    <svg
      class="absolute right-0 top-0 text-yellow-100 dark:text-slate-100 dark:text-opacity-30 -z-10 color-changing-svg"
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
            <h2 class="text-3xl font-bold md:text-[70px] leading-none mb-6">
              We at Leatherman believe in quality
            </h2>
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
  mounted() {
    this.changeSvgColor();
  },
  methods: {
    changeSvgColor() {
      const svgElement = document.querySelector('.color-changing-svg');
      const colors = ['#FFD700', '#FF6347', '#FFFFFF', '#32CD32', '#FF69B4']; // Array of colors
      let colorIndex = 0;

      setInterval(() => {
        svgElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }, 1000); // Change color every second
    }
  }
};
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
