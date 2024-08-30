<template>
  <div class="mt-6" data-aos="fade-up"
     data-aos-duration="3000">
    <div class="grid sm:grid-cols-2 m-40 items-start gap-14 p-8 mx-auto max-w-4xl bg-gray-50 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
      <div>
        <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
        <p class="text-sm text-gray-500 mt-4">
          Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
        </p>

        <!-- Email Section -->
        <div class="mt-12">
          <h2 class="text-gray-800 text-base font-bold">Email</h2>
          <ul class="mt-4">
            <li class="flex items-center">
              <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a href="mailto:info@example.com" class="text-[#474849] text-sm ml-4">
                <small class="block">Mail</small>
                <strong>info@example.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <!-- Socials Section -->
        <div class="mt-12">
          <h2 class="text-gray-800 text-base font-bold">Socials</h2>
          <ul class="flex mt-4 space-x-4">
            <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 24 24">
                  <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                </svg>
              </a>
            </li>
            <!-- Add more social icons here -->
          </ul>
        </div>
      </div>

      <!-- Form Section -->
      <form @submit.prevent="validateForm" class="ml-auto space-y-4">
        <input
          type='text'
          v-model="formData.name"
          placeholder='Name'
          class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        />
        <span v-if="errors.name" class="text-red-600 text-xs">{{ errors.name }}</span>

        <input
          type='email'
          v-model="formData.email"
          placeholder='Email'
          class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        />
        <span v-if="errors.email" class="text-red-600 text-xs">{{ errors.email }}</span>

        <input
          type='text'
          v-model="formData.subject"
          placeholder='Subject'
          class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        />
        <span v-if="errors.subject" class="text-red-600 text-xs">{{ errors.subject }}</span>

        <textarea
          v-model="formData.message"
          placeholder='Message'
          rows="6"
          class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
        ></textarea>
        <span v-if="errors.message" class="text-red-600 text-xs">{{ errors.message }}</span>

        <button
          type='submit'
          class="text-white animate-gradient hover:bg-gray-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      // Validate name
      if (!this.formData.name) {
        this.errors.name = 'Name is required';
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) {
        this.errors.email = 'Email is required';
      } else if (!emailPattern.test(this.formData.email)) {
        this.errors.email = 'Invalid email address';
      }

      // Validate subject
      if (!this.formData.subject) {
        this.errors.subject = 'Subject is required';
      }

      // Validate message
      if (!this.formData.message) {
        this.errors.message = 'Message is required';
      }

      // If no errors, show success message
      if (Object.keys(this.errors).length === 0) {
        alert('Your message has been sent successfully!');
        // Reset form fields
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
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
  background: linear-gradient(270deg, #5c5b5b, #222121, #575555, #d4cfc5);
  background-size: 600% 600%;
  animation: gradient 10s ease infinite;
  min-height: 30px; /* You can adjust this value to control the height */
}
</style>
