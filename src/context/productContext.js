import { useContext, createContext, useReducer } from "react";
import { initialState, productsReducer } from "../reducers/productReducer";
import { getAllProducts, getAllProductById } from "../apicalls/productsApi";
const ProductProvider = createContext();
export const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getAllListingProducts = async () => {
    try {
      dispatch({ type: "SET-LOADER-ON" });
      const products = await getAllProducts();

      dispatch({ type: "SET-LOADER-OFF" });
      dispatch({ type: "SET-PRODUCTS", payload: products });
    } catch (error) {
      //   dispatch({ type: "", error });
    }
  };


  return (
    <ProductProvider.Provider
      value={{ state, dispatch, getAllListingProducts }}
    >
      {children}
    </ProductProvider.Provider>
  );
};

export const useProductContext = () => useContext(ProductProvider);
