import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { breedsReducer } from "./breeds";

export const rootReducer = combineReducers({
  breedsData: breedsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
