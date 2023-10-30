import { get } from "lodash";

export const getBreedsData = (store) =>
  get(store, "breedsData", "#16102e");
