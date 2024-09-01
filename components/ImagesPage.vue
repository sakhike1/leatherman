<template>
  <section class="relative py-28 bg-gray-900">
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
      <div class="max-w-xl">
        <h3 class="text-white text-3xl font-semibold sm:text-4xl">
          Fast and Reliable Delivery, Every Time
        </h3>
        <p class="mt-3">
          We prioritize speed and reliability to ensure your products reach you as quickly and safely as possible. Trust our efficient delivery services to meet your needs, no matter where you are.
        </p>
      </div>
      <div class="mt-12 lg:mt-0">
        <ul class="grid gap-8 sm:grid-cols-2">
          <li v-for="(item, idx) in features" :key="idx" class="flex gap-x-4">
            <div class="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg text-gray-100 font-semibold">
                {{ item.title }}
              </h4>
              <p class="mt-3">
                {{ item.desc }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" :style="{ background: 'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)' }"></div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          icon: 'M12 3v3m6.364 1.636L17 9m4 3h-3m-4.636 4.364L15 15M12 21v-3m-6.364-1.636L7 15M3 12h3m1.636-4.364L9 9M9 9l1.5 1.5m3 3L15 15M12 3a9 9 0 100 18 9 9 0 000-18z', // Icon for speed
          title: 'Speedy Delivery',
          desc: 'Get your products delivered to your doorstep faster than ever before with our optimized logistics network.'
        },
        {
          icon: 'M9 3l-7 7 7 7m7-14l7 7-7 7M3 10h18', // Icon for tracking
          title: 'Real-time Tracking',
          desc: 'Track your order in real-time with our advanced tracking system, ensuring peace of mind at every step.'
        },
        {
          icon: 'M4.75 19.5l14.5-14.5M4.75 4.75L19.5 19.5', // Icon for reliability
          title: 'Guaranteed Reliability',
          desc: 'Count on us to deliver your products safely and on time, every time, with our reliable delivery service.'
        },
      ]
    };
  }
};

</script>
