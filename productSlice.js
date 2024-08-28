import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedProductId: null,
  },
  reducers: {
    setSelectedProductId(state, action) {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setSelectedProductId } = productSlice.actions;
export default productSlice.reducer;
