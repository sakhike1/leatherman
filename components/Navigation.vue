<template>
  <nav class="bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="flex space-x-7">
          <!-- Website Logo -->
          <nuxt-link to="/" class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-100 text-lg">Leatherman</span>
          </nuxt-link>
        </div>
        <!-- Primary Navbar items -->
        <div class="hidden md:flex items-center space-x-4">
          <nuxt-link
            to="/"
            :class="linkClass('/')"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/services"
            :class="linkClass('/services')"
          >
            Services
          </nuxt-link>
          <nuxt-link
            to="/about"
            :class="linkClass('/about')"
          >
            About
          </nuxt-link>
          <nuxt-link
            to="/contact"
            :class="linkClass('/contact')"
          >
            Contact Us
          </nuxt-link>
          <!-- New links -->
          <nuxt-link
            to="/signup"
            :class="linkClass('/signup')"
          >
            Sign Up
          </nuxt-link>
          <nuxt-link
            to="/login"
            :class="linkClass('/login')"
          >
            Login
          </nuxt-link>
          <nuxt-link
            to="/cart"
            :class="linkClass('/cart')"
          >
            <svg
              class="w-6 h-6 text-gray-100 inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4-7h14M7 13l-3 9m3-9h10m0 0l3 9m-3-9H7"
              />
            </svg>
            Cart
          </nuxt-link>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="outline-none menu-button">
            <svg
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-16 6h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="mobileMenuClass">
      <ul>
        <li>
          <nuxt-link
            to="/"
            :class="linkClass('/')"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/services"
            :class="linkClass('/services')"
          >
            Services
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/about"
            :class="linkClass('/about')"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            :class="linkClass('/contact')"
          >
            Contact Us
          </nuxt-link>
        </li>
        <!-- New links -->
        <li>
          <nuxt-link
            to="/signup"
            :class="linkClass('/signup')"
          >
            Sign Up
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/login"
            :class="linkClass('/login')"
          >
            Login
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/cart"
            :class="linkClass('/cart')"
          >
            <svg
              class="w-6 h-6 text-gray-100 inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4-7h14M7 13l-3 9m3-9h10m0 0l3 9m-3-9H7"
              />
            </svg>
            Cart 
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    mobileMenuClass() {
      return this.showMenu ? "" : "hidden";
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    linkClass(path) {
      return this.$route.path === path
        ? "py-4 px-2 text-gray-100 border-b-4 border-yellow-500 font-semibold"
        : "py-4 px-2 text-gray-100 font-semibold hover:text-gray-150 transition duration-300";
    },
  },
};
</script>

<style scoped>
/* Additional styling to ensure the border is always visible */
</style>
