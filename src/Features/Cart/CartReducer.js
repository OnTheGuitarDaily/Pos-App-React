import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsTotalPrice: 0,
  tax: 0,
  discount: 0,
  shipping: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setTax: (state, action) => {
      state.tax = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setProductsTotalPrice: (state, action) => {
      state.productsTotalPrice = action.payload;
    },
    calculateTotalPrice: (state) => {
      const taxAmount = (state.productsTotalPrice * state.tax) / 100;
      const discountAmount = (state.productsTotalPrice * state.discount) / 100;

      state.totalPrice =
        state.productsTotalPrice + taxAmount - discountAmount + state.shipping;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  }
});

export const {
  setTax,
  setDiscount,
  setShipping,
  setProductsTotalPrice,
  calculateTotalPrice,
  reset
} = cartSlice.actions;

export default cartSlice.reducer


