import {useCartContext} from "../../context/cartContext"
import { useEffect, useState } from "react"
import Card from "../../components/card/Card"

const Cart=()=>{
    const {getCartProducts, state} = useCartContext()
    useEffect(()=>{
    
        getCartProducts()
    },[])
    console.log("cart",state?.cart)
  
    return <div>
    {
        state?.loading && <p>Loading....</p>
    }
  {  state?.cart?.length > 0 && state?.cart?.map((product)=><Card  key = {product?.id} product = {product}/>)

}</div>
}
export default Cart