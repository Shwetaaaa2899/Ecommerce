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
      console.log("prod", action.payload);
      const cartsAdded = action.payload
        .map((product) => (product?.userId === 1 ? product.products : null))
        .flat();
      const cartForUser = cartsAdded?.reduce(
        ( acc,product) =>{
      
          
            // Check if productId already exists in accumulator
            const existingProductIndex = acc?.findIndex(p => p.productId === product?.productId);
            if (existingProductIndex === -1) {
              // If productId doesn't exist, add product to accumulator
              acc.push(product);
            }
          
          return acc;

        }
     ,[cartsAdded[0]] );

      console.log("cartForUser", cartForUser);
      return { ...state, cart: cartsAdded };

    case "ADD-TO-CART":
      console.log("data", action.payload);
      const cart = [...state?.cart, action.payload];
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
