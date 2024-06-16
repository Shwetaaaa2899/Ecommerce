import { useCartContext } from "../../context/cartContext";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { ClipLoader } from "react-spinners";  

import "./Cart.css";
const Cart = () => {
  const { getCartProducts, dispatch, state } = useCartContext();

  useEffect(() => {
    dispatch({ type: "SET-LOADER-ON" });
    getCartProducts();
    dispatch({ type: "SET-LOADER-OFF" });
  }, [state?.cart]);


  return (
    <div className="wrapper">
   
        {
        state?.loading ? (
         <ClipLoader />
        ) : ( <>  
        <div className="cards-parent-container ">
            
          {state?.cart?.length > 0 &&
          state?.cart?.map((product) =>  <Card key={product?.productId} product={product} inCart={1} />)
          
           } </div>
           </>)}
      
    </div>
  );
};
export default Cart;
