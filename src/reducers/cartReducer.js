export const initialState = {
  cart: [],
  totalprice: 0,
  loading:false
};

export const cartReducer = ( state,action) => {
  switch (action.type) {
    case "SET-LOADER-ON":
      return {...state,loading:true}
      case "SET-LOADER-OFF":
       return {...state,loading:false}
    case "SET-CART-PRODUCTS":
      return { ...state, cart : action.payload };
 
   case "ADD-TO-CART":
     return { ...state, cart : action.payload };

    case "REMOVE-FROM-CART":
      return { ...state, cart: action.payload };
    case "INCREASE-QUANTITY":
      return { ...state, cart: action.payload };
    case "DECREASE-QUANTITY":
      return { ...state, cart: action.payload };

    case "GET-TOTAL-PRICE":
      return { ...state, totalprice: action.payload };
    case "EMPTY-CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

