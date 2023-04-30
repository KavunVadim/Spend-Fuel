import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalInfo: {
    age1: '',
    operNad: '',
    oldMileage: '',
    newMileage: '',
    minusMilagecustom: '',
    baseRate: '',
    operationInKiev: '',
    operationalAllowance: '',
  },
};

export const inputSlice = createSlice({
  name: 'inputRun',
  initialState,
  reducers: {
    changeCarMarc: (state, action) => {
      state.car = action.payload;
    },
    changeBaseInfo: (state, action) => {
      state.baseInfo = action.payload;
    },
  },
});

export const { changeCarMarc, changeBaseInfo } = inputSlice.actions;

export default inputSlice.reducer;
