<template>
  <div>
    <section
      class="about__header light py-32 md:py-52 text-white bg-cover bg-center bg-no-repeat relative"
      style="background-image: url(https://cdn.easyfrontend.com/pictures/hero/hero_30.png)"
    >
      <div class="container px-4 mx-auto">
        <div class="md:max-w-5xl mx-auto flex justify-center items-center text-center">
          <div>
            <h1 class="text-3xl font-bold leading-tight md:text-[62px] mb-2">
              About Our Mission and Values
            </h1>
            <p class="text-xl opacity-80 leading-snug px-12 py-6">
              We strive to provide quality and strong leather  that is garanteed to stand agaist all seasons  
            </p>
            <div class="sm:max-w-lg mx-auto flex justify-center">
              <form class="w-full flex justify-center items-center rounded-xl overflow-hidden mx-auto">
                <input type="email" class="bg-white px-7 py-3 grow focus:outline-none" placeholder="Enter Email" />
                <button
                  class="flex justify-center items-center text-white text-[22px] py-3 px-7 h-12 border border-gray-600 bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-opacity-90 hover:border-opacity-90 duration-300"
                >
                  <i class="fas fa-search">subscribe</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
};
</script>

<style lang="scss" scoped>
.about__header {
  // Add any specific styles for the About component here
}
</style>
