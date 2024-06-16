export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET-PRODUCTS":
      return { ...state, products: action.payload };

    case "SET-LOADER-ON":
      return { ...state, loading: true };
    case "SET-LOADER-OFF":
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const initialState = {
  islaoding: true,
  products: [],
  loading: false,
};
