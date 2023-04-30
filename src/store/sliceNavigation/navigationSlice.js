import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: { activeUrl: '/' },
  reducers: {
    setActiveUrl: (state, action) => {
      state.activeUrl = action.payload;
    },
  },
});

export const { setActiveUrl } = navigationSlice.actions;

export default navigationSlice.reducer;
