import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  car: { id: '', name: '', baseRate: '' },
  baseInfo: { ageCar: [], operationInKiev: '', operationalAllowance: '' },
};

export const carSlice = createSlice({
  name: 'car',
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

export const { changeCarMarc, changeBaseInfo } = carSlice.actions;

export default carSlice.reducer;
