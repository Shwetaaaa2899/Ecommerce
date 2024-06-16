import {useCartContext} from "../../context/cartContext"
import { useEffect, useState } from "react"
import Card from "../../components/card/Card"

const Cart=()=>{
    const {getCartProducts,dispatch, state} = useCartContext()
    useEffect(()=>{
        dispatch({type: "SET-LOADER-ON" })
        getCartProducts()
        dispatch({type: "SET-LOADER-OFF" })
    },[])
  
    return   <div className="wrapper">
    <div className="cards-parent-container ">
    {
        state?.loading ? <p>Loading....</p>
    :
    state?.cart?.length > 0 && state?.cart?.map((product)=><Card  key = {product?.id} product = {product} inCart = {1}/>)

}</div>
</div>
}
export default Cart