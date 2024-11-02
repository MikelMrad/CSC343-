import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  product: "",
};

const filterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilterProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setFilterProduct } = filterSlice.actions;
export default filterSlice.reducer;
