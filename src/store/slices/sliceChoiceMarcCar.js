import { createSlice } from '@reduxjs/toolkit';
import storage from '../../helpers/storage';

const initialState = {
  car: storage.get('car') || { id: '', name: '', baseRate: '' },
  baseInfo: storage.get('baseInfo') || {
    ageCar: [],
    operationInKiev: '',
    operationalAllowance: '',
  },
};

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeCarMarc: (state, action) => {
      state.car = action.payload;
      storage.save('car', state.car);
    },
    changeBaseInfo: (state, action) => {
      state.baseInfo = action.payload;
      storage.save('baseInfo', state.baseInfo);
    },
  },
});

export const { changeCarMarc, changeBaseInfo } = carSlice.actions;

export default carSlice.reducer;
