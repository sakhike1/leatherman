<template>
  <div>
    <div
      class="flex items-center max-md:flex-col gap-4 bg-gradient-to-r animate-gradient text-white px-4 py-2 font-[sans-serif]"
    >
      <p class="text-sm text-white flex-1 max-md:text-center">
        Don't miss out on our amazing summer sale! Get up to 50% off on a wide range of
        products. Make the most of your summer shopping.
      </p>

      <div>
        <button
          type="button"
          class="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-black py-2 px-4 rounded text-sm"
        >
          Get Offer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background: linear-gradient(270deg, #5c5b5b, #f8dede, #360e0e, #d4cfc5);
  background-size: 600% 600%;
  animation: gradient 10s ease infinite;
  min-height: 30px; /* You can adjust this value to control the height */
}
</style>
