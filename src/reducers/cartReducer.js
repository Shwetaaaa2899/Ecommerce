export const initialState = {
  cart: localStorage?.getItem('cart')?.length > 0 ?localStorage?.getItem('cart') : [],

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
const {products} = action.payload

   const cart = [...state?.cart].concat(products[0]);
    localStorage.setItem("cart",cart)
      return { ...state, cart };

    case "REMOVE-FROM-CART":
      const cartUpdated = [...state.cart].filter(
        (prod) => prod?.productId !== action.payload
      );
      localStorage.setItem("cart",cartUpdated)
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
      localStorage.removeItem("cart")
      console.log(localStorage.getItem("cart"))
      return { ...state, cart: [] };
    default:
      return state;
  }
};
