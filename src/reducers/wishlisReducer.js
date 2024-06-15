export const initialState = {
  wishlist: [],
 
};

const wishlistReducer = (value, action) => {
  switch (action.type) {
   case "ADD-TO-WISHLIST":
      const { product, wishlist } = action.payload;

      return { ...value, wishlist };

    case "REMOVE-FROM-WISHLIST":
      return { ...value, wishlist: action.payload.wishlist };

    default:
      return value;
  }
};

export default wishlistReducer;
