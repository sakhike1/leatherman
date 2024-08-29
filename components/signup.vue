<template>
  <div class="font-[sans-serif] max-w-4xl flex items-center mx-auto md:h-screen p-4">
    <div class="grid bg-gray-100 md:grid-cols-3 items-center rounded-xl overflow-hidden">
      <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full animate-gradient h-full to-gray-400 lg:px-8 px-4 py-4">
        <div>
          <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="md:col-span-2 w-full py-6 px-6 sm:px-16">
        <div class="mb-6">
          <h3 class="text-gray-800 text-2xl font-bold">Create an account</h3>
        </div>

        <div class="space-y-6">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Name</label>
            <div class="relative flex items-center">
              <input v-model="form.name" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
              <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
            <div class="relative flex items-center">
              <input v-model="form.email" type="email" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
              <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
            <div class="relative flex items-center">
              <input v-model="form.password" type="password" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
              <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
            </div>
          </div>
        </div>

        <div class="!mt-12">
          <button type="submit" class="w-full animate-gradient py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
            Create an account
          </button>
        </div>
        <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <nuxt-link to="/login" class="text-blue-600 font-semibold hover:underline ml-1">Login here</nuxt-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.form.name) {
        this.errors.name = 'Name is required.';
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Invalid email format.';
        isValid = false;
      }

      if (!this.form.password) {
        this.errors.password = 'Password is required.';
        isValid = false;
      }

      return isValid;
    },
    handleSubmit() {
      if (this.validateForm()) {
        // Handle form submission
        console.log('Form submitted:', this.form);
        // You can add your API call here
      }
    },
  },
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
  background: linear-gradient(270deg, #5c5b5b, #f8dede, #360e0e, #d4cfc5);
  background-size: 600% 600%;
  animation: gradient 10s ease infinite;
  min-height: 30px; /* You can adjust this value to control the height */
}
</style>
