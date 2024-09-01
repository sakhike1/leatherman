<template>
    <section class="py-14">
        <div class="max-w-screen-xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 mx-auto pt-10 px-4 md:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <h3 class="text-gray-700 font-semibold pb-6">What people are saying about leatherman</h3>
                <div v-for="(testimonial, index) in testimonials" :key="index" v-show="currentTestimonial === index">
                    <figure>
                        <blockquote>
                            <p class="text-gray-800 text-xl font-semibold sm:text-2xl">{{ testimonial.quote }}</p>
                        </blockquote>
                        <div class="mt-6">
                            <img :src="testimonial.avatar" class="w-16 h-16 mx-auto rounded-full" />
                            <div class="mt-3">
                                <span class="block text-gray-800 font-semibold">{{ testimonial.name }}</span>
                                <span class="block text-gray-600 text-sm mt-0.5">{{ testimonial.title }}</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div class="mt-6">
                <ul class="flex gap-x-3 justify-center">
                    <li v-for="(testimonial, index) in testimonials" :key="index">
                        <button 
                            class="w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-gray-600 focus:ring"
                            :class="{ 'bg-black': currentTestimonial === index, 'bg-gray-300': currentTestimonial !== index }"
                            @click="currentTestimonial = index"
                        ></button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentTestimonial: 0,
            testimonials: [
                {
                    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
                    name: 'Martin Escobar',
                    title: 'Founder of Meta',
                    quote: 'Leatherman clothing not only offers premium leather garments, but they also ensure that every order arrives swiftly and in pristine condition'
                },
                {
                    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
                    name: 'Angela Stian',
                    title: 'Product Designer',
                    quote: 'Shopping with Leatherman has been a seamless experience. From browsing to checkout, and finally receiving my order, the entire process was smooth and fast. I always know I can rely on them for both quality and speed'
                },
                {
                    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
                    name: 'Karim Ahmed',
                    title: 'DevOp Engineer',
                    quote: 'Leatherman’s commitment to delivering high-quality leather clothing is evident in their fast shipping times. I’m always impressed by how quickly my orders arrive, and the product quality never disappoints'
                }
            ]
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        startAutoSlide() {
            this.interval = setInterval(() => {
                this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
            }, 5000); // change every 5 seconds
        }
    }
};
</script>
