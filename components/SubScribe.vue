<template>
  <div>
    <section class="py-24">
      <div class="max-w-5xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div
          class="p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col space-y-6 relative"
        >
          <div
            class="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"
          ></div>
          <div
            class="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"
          ></div>
          <div
            class="lg:h-full flex flex-col items-center text-center justify-center space-y-8 mx-auto max-w-2xl"
          >
            <h1 class="font-bold text-gray-900 dark:text-white text-4xl">
              Join other
              <span
                class="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400"
                >600 Amazing</span
              >
              Leatherman
            </h1>
            <p class="text-gray-700 dark:text-gray-300 text-center max-w-xl">
              We will send you information regarding new arrival prices and all the
              excitement
            </p>
            <form
              @submit.prevent="handleSubscribe"
              class="w-full flex flex-col sm:items-center sm:flex-row gap-y-3 gap-x-4 max-w-lg mx-auto"
            >
              <input
                v-model="email"
                type="email"
                placeholder="johndoe@gmail.com"
                class="py-3 px-5 rounded-lg text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 outline-none w-full placeholder:text-gray-600 dark:placeholder:text-gray-300"
                :class="{ 'border-red-500': showAlert }"
              />
              <button
                type="submit"
                class="py-3 rounded-lg px-6 bg-blue-600 dark:bg-blue-500 text-white font-medium text-base w-full sm:w-max flex justify-center"
              >
                Subscribe
              </button>
            </form>
            <p v-if="showAlert" class="text-red-500 text-sm mt-2">
              Please enter a valid email address.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const showAlert = ref(false);

const handleSubscribe = () => {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || !emailRegex.test(email.value)) {
    showAlert.value = true;
  } else {
    showAlert.value = false;
    // Handle successful subscription here (e.g., send email to server)
    alert("Thank you for subscribing!");
    // Optionally clear the input field
    email.value = "";
  }
};
</script>

<style lang="scss" scoped>
/* Add custom styles if needed */
</style>
