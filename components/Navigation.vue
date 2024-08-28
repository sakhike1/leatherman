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
          <nuxt-link to="/" @click="setActiveLink('Home')" :class="linkClass('Home')"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/services"
            @click="setActiveLink('Services')"
            :class="linkClass('Services')"
            >Services</nuxt-link
          >
          <nuxt-link
            to="/about"
            @click="setActiveLink('About')"
            :class="linkClass('About')"
            >About</nuxt-link
          >
          <nuxt-link
            to="/contact"
            @click="setActiveLink('Contact Us')"
            :class="linkClass('Contact Us')"
            >Contact Us</nuxt-link
          >
          <!-- New links -->
          <nuxt-link
            to="/signup"
            @click="setActiveLink('Sign Up')"
            :class="linkClass('Sign Up')"
            >Sign Up</nuxt-link
          >
          <nuxt-link
            to="/login"
            @click="setActiveLink('Login')"
            :class="linkClass('Login')"
            >Login</nuxt-link
          >
          <nuxt-link to="/cart" @click="setActiveLink('Cart')" :class="linkClass('Cart')">
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
          <nuxt-link to="/" @click="setActiveLink('Home')" :class="linkClass('Home')"
            >Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/services"
            @click="setActiveLink('Services')"
            :class="linkClass('Services')"
            >Services</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/about"
            @click="setActiveLink('About')"
            :class="linkClass('About')"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            @click="setActiveLink('Contact Us')"
            :class="linkClass('Contact Us')"
            >Contact Us</nuxt-link
          >
        </li>
        <!-- New links -->
        <li>
          <nuxt-link
            to="/signup"
            @click="setActiveLink('Sign Up')"
            :class="linkClass('Sign Up')"
            >Sign Up</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/login"
            @click="setActiveLink('Login')"
            :class="linkClass('Login')"
            >Login</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/cart" @click="setActiveLink('Cart')" :class="linkClass('Cart')">
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
      activeLink: "Home", // Default active link
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
    setActiveLink(link) {
      this.activeLink = link;
    },
    linkClass(link) {
      return this.activeLink === link
        ? "py-4 px-2 text-gray-100 border-b-4 border-yellow-500 font-semibold"
        : "py-4 px-2 text-gray-100 font-semibold hover:text-gray-150 transition duration-300";
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
