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
console.log(localStorage.getItem("cart"))
console.log(JSON.parse(localStorage.getItem("cart")))
        // products = JSON.parse(localStorage.getItem("cart"));
        //   const finalProduct = getFlattenCartData(products);
      } else {

        products = await getAllCartProducts();
      }
    

      localStorage.setItem("cart", products);
      console.log("setted",products)
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
      console.log("satgae1", productToBePassed);

      const response = await addProductToCart(productToBePassed);
      console.log("prod", response);

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

  const handlecartlistCheck = (product) => {
 
    if(state?.cart?.length > 0 ){
      return true
        // return state?.cart?.some((item) => item?.id === product?.id);

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
