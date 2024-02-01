import { createSlice } from '@reduxjs/toolkit';

export const buildingSlice = createSlice({
  name: 'building',
  initialState: {
    buildings: [
      { id: 1, name: 'Objekti 1' , floors: 4,  imagePath: '/foto/objektet/building1.png'},
      { id: 2, name: 'Objekti 2' , floors: 4,  imagePath: '/foto/objektet/building2.png'},
      { id: 3, name: 'Objekti 3' , floors: 3,  imagePath: '/foto/objektet/building3.png'},
      { id: 4, name: 'Objekti 4' , floors: 3,  imagePath: '/foto/objektet/building4.png'},
      { id: 5, name: 'Objekti 5' , floors: 2,  imagePath: '/foto/objektet/building5.png'},
      { id: 6, name: 'Objekti 6' , floors: 3,  imagePath: '/foto/objektet/building6.png'},
      { id: 7, name: 'Objekti 7' , floors: 3,  imagePath: '/foto/objektet/building7.png'},
    ],
    selectedBuilding: null,
  },
  reducers: {
    selectBuilding: (state, action) => {
      state.selectedBuilding = action.payload;
    },
  },
});

export const { selectBuilding } = buildingSlice.actions;

export default buildingSlice.reducer;
