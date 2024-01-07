import { createSlice } from '@reduxjs/toolkit';
import { fetchDataAsync } from '../../Actions/Actions';
const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  },
});


export default productSlice.reducer;
