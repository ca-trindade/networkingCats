import { createSlice } from "@reduxjs/toolkit";
import { fetchDataBreeds } from "../../api/axios";


export const breedsSlice = createSlice({
  name: "storeBreedsData",
  initialState: {
    breedsData: {}
  },
  reducers: {
    saveData: (state) => {
      state.breedsData = fetchDataBreeds();
    },

  },
});

export const { saveData } = breedsSlice.actions;
export default breedsSlice.reducer;