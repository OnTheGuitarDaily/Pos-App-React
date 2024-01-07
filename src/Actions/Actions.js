import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../API/apiService';


// create action for fetching
export const fetchDataAsync = createAsyncThunk('products/fetchData', async () => {
    try {
      const res = await getProducts();
      return res.data
    } catch (error) {
      console.error('Error fetching Post:', error)
    }
  });
  