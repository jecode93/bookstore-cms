import { createSlice } from '@reduxjs/toolkit';

const initialeState = [];

export const categoriesSlice = createSlice({
  name: 'category',
  initialeState,
  reducers: {
    categoryStatus: () => 'Under construction',
  },
});

export const { categoryStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
