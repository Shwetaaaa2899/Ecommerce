import { useContext, createContext, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cartReducer";
import {
  getAllCartProducts,
  addProductToCart,
  getAllProductById,
  formatDate,
  getFlattenCartData
} from "../apicalls/productsApi";
const CartProvider = createContext();
export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);


  const getCartProducts = async () => {
    try {
      dispatch({ type: "SET-LOADER-ON" });
      let products = [];
      if (localStorage.getItem("cart")?.length > 0) {
    products = JSON.parse(localStorage.getItem("cart"));
      } else {

        products = await getAllCartProducts();
      }
    localStorage.setItem("cart", products);
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-CART-PRODUCTS", payload: products });
    } catch (error) {
      console.log("error", error );
    }
  };
  const addProductToCartById = async (product) => {
    try {
      const productToBePassed = {
        userId: product?.userId,
        date: new Date(),
        products: product?.products,
      };

      const response = await addProductToCart(productToBePassed);

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

  const handlecartlistCheck = (product,cart) => {
 
    if(cart?.length > 0 ){
    //   return true
const flag = cart?.some((item) => console.log(item))
console.log("flag",flag,cart ,product?.productId)

        return cart?.some((item) => item?.productId === product?.id);

    }
  };
  return (
    <CartProvider.Provider
      value={{
        state,
        dispatch,
        getCartProducts,
        addProductToCartById,
        handlecartlistCheck,
        removeProductFromCartById,
        addQuantityOfProductInCart,
      }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export const useCartContext = () => useContext(CartProvider);
