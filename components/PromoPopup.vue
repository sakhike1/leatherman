<template>
  <transition name="fade">
    <div v-if="showPopup" class="fixed right-5 bottom-5 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 shadow-lg rounded-lg p-6 w-80 z-50" data-aos="fade-up"
     data-aos-duration="3000">
      <div class="popup-content">
        <h3 class="text-xl font-semibold mb-4">Sign Up for 20% Off!</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              required 
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              required 
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>
          <div class="flex justify-end">
            <button 
              type="submit" 
              class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
        <button 
          @click="closePopup" 
          class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

// Define reactive variables
const showPopup = ref(true)
const email = ref('')
const name = ref('')

// Functions to control the popup
const closePopup = () => {
  showPopup.value = false
}

const submitForm = () => {
  console.log(`Email: ${email.value}, Name: ${name.value}`)
  closePopup()
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
