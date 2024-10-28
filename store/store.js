import { configureStore } from '@reduxjs/toolkit';
import buildingReducer from './features/buildingSlice';
import floorReducer from './features/floorSlice';

export const store = configureStore({
  reducer: {
    building: buildingReducer,
    floor: floorReducer,
  },
});
