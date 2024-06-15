import { useEffect,useState } from "react"
import {useProductContextConsumer} from "../../context/productContext"
import Card from "../../components/card/Card"

const Home = () =>{
    const {getAllListingProducts,state} = useProductContextConsumer()
useEffect(()=>{
    getAllListingProducts()
},[])
    return <div>
        home pge
        {
            state?.loading && <p>Loading....</p>
        }
      {  state?.products?.length > 0 && state?.products?.map((product)=><Card  key = {product?.id} product = {product}/>)
   
}</div>
}
export default Home