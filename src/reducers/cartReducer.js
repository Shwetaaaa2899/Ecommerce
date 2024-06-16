export const initialState = {
  cart: [],
  totalprice: 0,
  loading: false,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET-LOADER-ON":
      return { ...state, loading: true };
    case "SET-LOADER-OFF":
      return { ...state, loading: false };
    case "SET-CART-PRODUCTS":
      const carts = action.payload;
      console.log("prod", action.payload);
      return { ...state, cart: carts };

    case "ADD-TO-CART":
      const cart = [...state?.cart, , action.payload];
      console.log("data", action.payload, cart);
      return { ...state, cart };

    case "REMOVE-FROM-CART":
      const cartUpdated = [...state.cart].filter(
        (prod) => prod?.id !== action.payload.id
      );
      return { ...state, cart: cartUpdated };
    case "INCREASE-QUANTITY":
      const increasedCartProduct = [...state.cart]?.map((prod) =>
        prod?.id === action.paylaod?.id ? action.payload : prod
      );
      return { ...state, cart: increasedCartProduct };
    case "DECREASE-QUANTITY":
      const decreasedCartProduct = [...state.cart]?.map((prod) =>
        prod?.id === action.paylaod?.id ? action.payload : prod
      );
      return { ...state, cart: decreasedCartProduct };

    case "EMPTY-CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
