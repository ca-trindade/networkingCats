import { configureStore } from "@reduxjs/toolkit";
import storeBreedsDataReducer from "./breeds/reducer"

export const store = configureStore({
  reducer: {
    storeBreedsData: storeBreedsDataReducer,
  },
});
