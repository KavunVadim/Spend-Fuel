import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: {
    age: '',
    operNad: '',
    oldMileage: '',
    newMileage: '',
    minusMilagecustom: '',
    baseRate: '',
    operationInKiev: '',
    operationalAllowance: '',
  },
};

export const totalInfoSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    changeTotalInfo: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { changeTotalInfo } = totalInfoSlice.actions;

export default totalInfoSlice.reducer;
