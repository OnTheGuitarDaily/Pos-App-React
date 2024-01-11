import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Features/Products/ProductsReducer';
import cartReducer  from '../Features/Cart/CartReducer';


const store = configureStore({
  reducer: {
    products: productReducer,
    calculator: cartReducer,
  },
});

export default store;
