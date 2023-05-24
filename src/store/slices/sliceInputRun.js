import { createSlice } from '@reduxjs/toolkit';
import storage from '../../helpers/storage';

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
      state.total = { ...action.payload };
      storage.save('total', state.total);
    },
  },
});

export const { changeTotalInfo } = totalInfoSlice.actions;

export default totalInfoSlice.reducer;
