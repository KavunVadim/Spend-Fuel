import { configureStore } from '@reduxjs/toolkit';
import car from './slices/sliceChoiceMarcCar';
import total from './slices/sliceInputRun';
import navigation from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    car,
    total,
    navigation,
  },
});
