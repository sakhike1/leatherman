import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id: productId, quantity: 1 });
      }
    },
    // other reducers...
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
