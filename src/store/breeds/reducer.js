const initialState = {
  breedsData: [],
};

const breedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_BREEDS_DATA":
      return {
        ...state,
        breedsData: action.data,
      };
    default:
      return state;
  }
};

export default breedsReducer;
