import { defineStore } from 'pinia';
import leather1 from '@/assets/leather1.png';
import leather2 from '@/assets/leather2.png';
import leather3 from '@/assets/leather3.png';
import leather4 from '@/assets/leather4.png';
import leather5 from '@/assets/leather5.png';
import leather6 from '@/assets/leather6.png';
import leather7 from '@/assets/leather7.png';
import leather8 from '@/assets/leather8.png';
import leather9 from '@/assets/leather8.png';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      { id: 1, name: 'leatherman', price: '$99.99', image: leather1, description: 'Premium quality leather.' },
      { id: 2, name: 'leatherman', price: '$199.99', image: leather2, description: 'Handcrafted with care.' },
      { id: 3, name: 'leatherman', price: '$129.99', image: leather3, description: 'Elegant and durable.' },
      { id: 4, name: 'leatherman', price: '$49.99', image: leather4, description: 'Affordable yet stylish.' },
      { id: 5, name: 'leatherman', price: '$99.99', image: leather5, description: 'Perfect for any occasion.' },
      { id: 6, name: 'leatherman', price: '$199.99', image: leather6, description: 'Luxury leather product.' },
      { id: 7, name: 'leatherman', price: '$129.99', image: leather7, description: 'A touch of class.' },
      { id: 8, name: 'leatherman', price: '$49.99', image: leather8, description: 'Great value for money.' },
      { id: 9, name: 'leatherman', price: '$129.99', image: leather9, description: 'Sophisticated and chic.' },
      { id: 10, name: 'leatherman', price: '$49.99', image: leather8, description: 'Everyday essential.' },
      { id: 11, name: 'leatherman', price: '$129.99', image: leather5, description: 'Classic design.' },
      { id: 12, name: 'leatherman', price: '$49.99', image: leather6, description: 'Practical and stylish.' },
      { id: 13, name: 'leatherman', price: '$49.99', image: leather4, description: 'Simple yet elegant.' },
      { id: 12, name: 'leatherman', price: '$49.99', image: leather6, description: 'Practical and stylish.' },
      { id: 13, name: 'leatherman', price: '$49.99', image: leather4, description: 'Simple yet elegant.' },
      // Add more products as needed
    ],
    selectedProduct: null,
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
});

