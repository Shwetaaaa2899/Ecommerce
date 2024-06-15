import { useContext, createContext, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cartReducer";
import { getAllCartProducts,addProductToCart} from "../apicalls/productsApi";
const CartProvider = createContext();
export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  
  const getCartProducts = async () => {
    try {
      dispatch({ type: "SET-LOADER-ON" });
      const products = await getAllCartProducts();
      
      console.log("prod", products);
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-CART-PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };
  const addProductToCartById = async (product) => {
    try {
      dispatch({ type: "SET-LOADER-ON" });
      const products = await addProductToCart(product);
      console.log("prod", products);
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "", error });
    }
  };
  return (
    <CartProvider.Provider
      value={{ state, dispatch, getCartProducts,addProductToCartById }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export const useCartContextConsumer = () => useContext(CartProvider);
