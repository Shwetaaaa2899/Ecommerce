import { useContext, createContext, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cartReducer";
import { getAllCartProducts, addProductToCart ,getAllProductById} from "../apicalls/productsApi";
const CartProvider = createContext();
export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const getCartProducts = async () => {
    try {
      dispatch({ type: "SET-LOADER-ON" });
      const products = await getAllCartProducts();

  
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-CART-PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };
  const addProductToCartById = async (product) => {
    try {
      const { userId, date, products } = product;
      dispatch({ type: "SET-LOADER-ON" });
      const response = await addProductToCart({ userId, date, products });
      console.log("prod", response);
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "ADD-TO-CART", payload: response });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };

  const removeProductFromCartById = async (product) => {
    try {
    
      console.log("prod", product);
    
      dispatch({ type: "REMOVE-FROM-CART", payload: product?.id });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };

  const addQuantityOfProductInCart = async (product) => {
    try {
      
      console.log("prod", product);
    
      dispatch({ type: "REMOVE-FROM-CART", payload: product?.id });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };

  const handlecartlistCheck = () => {};
  return (
    <CartProvider.Provider
      value={{
        state,
        dispatch,
        getCartProducts,
        addProductToCartById,
        handlecartlistCheck,
        removeProductFromCartById,
        addQuantityOfProductInCart
      }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export const useCartContext = () => useContext(CartProvider);
