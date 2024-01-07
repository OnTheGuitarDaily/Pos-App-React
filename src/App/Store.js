import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Features/Products/ProductsReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
