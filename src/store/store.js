import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../store/sliceChoiceMarcCar/sliceChoiceMarcCar';
// import totalReducer from '../store/sliceInputRun';

export const store = configureStore({
  reducer: { carInform: carReducer },
});
