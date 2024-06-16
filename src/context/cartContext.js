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
      if (JSON.parse(localStorage.getItem("cart")?.length > 0)) {
        console.log("ls", localStorage.getItem("cart"));

        products = JSON.parse(localStorage.getItem("cart"));
      } else {
        console.log("else");

        products = await getAllCartProducts();
      }
      const finalProduct = getFlattenCartData(products);
      console.log("flat", finalProduct);
      localStorage.setItem("cart", finalProduct);
      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-CART-PRODUCTS", payload: finalProduct });
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
    console.log(
      state?.cart?.some((item) => item?.id === product?.id),
      "prod",
      product?.id
    );
    return state?.cart?.some((item) => item?.id === product?.id);
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
