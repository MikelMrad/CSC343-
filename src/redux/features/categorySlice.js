import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "",
};

const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setFilterCategory: (state, action) => {
      state.category = action.payload;
    },
    clearFilterCategory: (state) => {
      state.category = " ";
    },
  },
});

export const { setFilterCategory, clearFilterCategory } = filterSlice.actions;
export default filterSlice.reducer;
