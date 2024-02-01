import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  floorsByBuilding: {
    'building1': [
      { id: 'floor1', name: 'Garazha dhe depo', imagePath: '/foto/katet/building1-Garazha dhe depo.png' },
      { id: 'floor2', name: 'Afarizem SU', imagePath: '/foto/katet/building1-Afarizem SU.png' },
      { id: 'floor3', name: 'Afarizem P', imagePath: '/foto/katet/building1-Afarizem P.png' },
      { id: 'floor4', name: 'Kati karakteristik', imagePath: '/foto/katet/building1-Kati karakteristik.png' },
      // Add other floors for building1
    ],
    'building2':[
      { id: 'floor1', name: 'Garazha dhe depo', imagePath: '/foto/katet/building2-Garazha dhe depo.png' },
      { id: 'floor2', name: 'Afarizem SU', imagePath: '/foto/katet/building2-Afarizem SU.png' },
      { id: 'floor3', name: 'Afarizem P', imagePath: '/foto/katet/building2-Afarizem P.png' },
      { id: 'floor4', name: 'Kati karakteristik', imagePath: '/foto/katet/building2-Kati karakteristik.png' }, 
    ],
    'building3':[
      { id: 'floor1', name: 'Afarizem P', imagePath: '/foto/katet/building3-Afarizem P.png' },
        { id: 'floor2', name: 'Kati karakteristik', imagePath: '/foto/katet/building3-Kati karakteristik.png' },
        { id: 'floor3', name: 'Baza e katit 1', imagePath: '/foto/katet/building3-Baza e katit 1.png' }, 
    ],
    'building4':[
      { id: 'floor1', name: 'Afarizem P', imagePath: '/foto/katet/building4-Afarizem P.png' },
        { id: 'floor2', name: 'Kati karakteristik', imagePath: '/foto/katet/building4-Kati karakteristik.png' },
        { id: 'floor3', name: 'Baza e katit 1', imagePath: '/foto/katet/building4-Baza e katit 1.png' }, 
    ],
    'building5':[
      { id: 'floor1', name: 'Afarizem P', imagePath: '/foto/katet/building5-Afarizem P.png' },
        { id: 'floor2', name: 'Kati karakteristik', imagePath: '/foto/katet/building5-Kati karakteristik.png' }, 
    ],
    'building6':[
      { id: 'floor1', name: 'Townhouses Kati 1', imagePath: '/foto/katet/building6-Baza e katit 1.png' },
      { id: 'floor2', name: 'Townhouses Perdhese', imagePath: '/foto/katet/building6-Afarizem P.png' },
        { id: 'floor3', name: 'Kati karakteristik', imagePath: '/foto/katet/building6-Kati karakteristik.png' },
        // { id: 'floor3', name: 'Baza e katit 1', imagePath: '/foto/katet/building6-Baza e katit 1.png' }, 
    ],
    'building7':[
      { id: 'floor1', name: 'Townhouses', imagePath: '/foto/katet/building7-Afarizem P.png' },
        { id: 'floor2', name: 'Kati karakteristik', imagePath: '/foto/katet/building7-Kati karakteristik.png' },
        // { id: 'floor3', name: 'Townhouses', imagePath: '/foto/katet/building7-Baza e katit 1.png' }, 
    ],
},
  selectedFloor: null,
};

export const floorSlice = createSlice({
  name: 'floor',
  initialState,
  reducers: {
    selectFloor: (state, action) => {
      state.selectedFloor = action.payload;
    },
    // Add any other reducers as needed
  },
});

export const { selectFloor } = floorSlice.actions;

export default floorSlice.reducer;
