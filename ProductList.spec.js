import { mount } from '@vue/test-utils';
import CardsPage from '@/components/CardsPage.vue'; // Update the path if needed
import Pagination from '@/components/Pagination.vue'; // Ensure correct path

describe('CardsPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardsPage, {
      global: {
        components: {
          Pagination,
        },
      },
      data() {
        return {
          products: [
            { id: 1, name: 'Leather Bag', price: '$100', image: 'leather1.png' },
            { id: 2, name: 'Leather Wallet', price: '$50', image: 'leather2.png' },
            // Add more products as needed for testing
          ],
          currentPage: 1,
        };
      },
    });
  });

  it('renders the correct number of products', () => {
    const productItems = wrapper.findAll('.bg-white');
    expect(productItems.length).toBe(2); // Adjust based on the number of products in the data
  });

  it('displays product details correctly', () => {
    const firstProduct = wrapper.find('.bg-white');
    expect(firstProduct.find('h3').text()).toBe('Leather Bag');
    expect(firstProduct.find('h4').text()).toBe('$100');
  });

  it('calls handleButtonClick when the button is clicked', async () => {
    const handleButtonClick = jest.spyOn(wrapper.vm, 'handleButtonClick');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(handleButtonClick).toHaveBeenCalledWith(1); // Adjust based on the product ID
  });

  it('updates the current page when pagination is used', async () => {
    const pagination = wrapper.findComponent(Pagination);
    await pagination.vm.$emit('update:page', 2);
    expect(wrapper.vm.currentPage).toBe(2);
  });
});
