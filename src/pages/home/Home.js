import { useEffect, useState } from "react";
import { useProductContext } from "../../context/productContext";
import Card from "../../components/card/Card";
import { ClipLoader } from "react-spinners";  

import "./Home.css"
const Home = () => {
  const { getAllListingProducts, state } = useProductContext();

  useEffect(() => {
    getAllListingProducts();
  }, []);
  return (
  <div className="wrapper">
    <div className="cards-parent-container ">
      {state?.loading &&     <ClipLoader />} 
      {state?.products?.length > 0 &&
        state?.products?.map((product) => (
          <Card key={product?.id} product={product} />
        ))}
    </div>
    </div>
  );
};
export default Home;
