<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Website Logo -->
          <a href="#" class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-500 text-lg">Leatherman</span>
          </a>
        </div>
        <!-- Primary Navbar items -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" @click="setActiveLink('Home')" :class="linkClass('Home')">Home</a>
          <a
            href="#services"
            @click="setActiveLink('Services')"
            :class="linkClass('Services')"
            >Services</a
          >
          <a href="#about" @click="setActiveLink('About')" :class="linkClass('About')"
            >About</a
          >
          <a
            href="#contact"
            @click="setActiveLink('Contact Us')"
            :class="linkClass('Contact Us')"
            >Contact Us</a
          >
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
          <a href="#" @click="setActiveLink('Home')" :class="linkClass('Home')">Home</a>
        </li>
        <li>
          <a
            href="#services"
            @click="setActiveLink('Services')"
            :class="linkClass('Services')"
            >Services</a
          >
        </li>
        <li>
          <a href="#about" @click="setActiveLink('About')" :class="linkClass('About')"
            >About</a
          >
        </li>
        <li>
          <a
            href="#contact"
            @click="setActiveLink('Contact Us')"
            :class="linkClass('Contact Us')"
            >Contact Us</a
          >
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
        ? "py-4 px-2 text-gray-500 border-b-4 border-gray-500 font-semibold"
        : "py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300";
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
