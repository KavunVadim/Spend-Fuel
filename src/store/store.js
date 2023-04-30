import { configureStore } from '@reduxjs/toolkit';
import carReducer from './sliceChoiceMarcCar/sliceChoiceMarcCar';
import totalReducer from './sliceInputRun/sliceInputRun';
import navigationReducer from './sliceNavigation/navigationSlice';

export const store = configureStore({
  reducer: {
    carInfo: carReducer,
    totalInfo: totalReducer,
    navigation: navigationReducer,
  },
});
