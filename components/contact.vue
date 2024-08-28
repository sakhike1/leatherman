<template>
<section
  class="ezy__contact4 light ml-40 py-14 md:py-24 bg-gray-300 dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden"
>
  <div class="container px-4">
    <div class="grid grid-cols-12 py-6 lg:gap-8">
      <div class="col-span-12 lg:col-span-7 mb-4 lg:mb-0">
        <div
          class="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[150px] h-full object-cover"
          style="background-image: url(https://cdn.easyfrontend.com/pictures/contact/contact_4.png)"
        ></div>
      </div>
      <div class="col-span-12 lg:col-span-5">
        <div class=" dark:bg-[#162231]  shadow-xl rounded-2xl p-6 md:p-12">
          <h2 class="text-2xl md:text-[45px] leading-none font-bold mb-4">Contact Us</h2>
          <p class="text-lg mb-12">We list your menu online, help you process orders.</p>

          <form class="">
            <div class="mb-4 ">
              <input
                type="text"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-4">
              <textarea
                name="message"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Message"
                rows="4"
              ></textarea>
            </div>
            <div class="text-start">
              <button type="submit" class="bg-black hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>




</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style lang="scss" scoped>
.contact__header {
  // Specific styles for the contact header
}

.contact__form {
  // Specific styles for the contact form
}
</style>
