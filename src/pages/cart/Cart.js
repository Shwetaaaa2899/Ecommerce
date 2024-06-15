import {useCartContextConsumer} from "../../context/cartContext"
import { useEffect } from "react"
import Card from "../../components/card/Card"

const Cart=()=>{
    const {getCartProducts, state} = useCartContextConsumer()
    console.log("st",state,state?.cart)
    useEffect(()=>{
        getCartProducts()
    },[])
    return <div>cart pge
    {
        state?.loading && <p>Loading....</p>
    }
  {  state?.cart?.length > 0 && state?.cart?.map((product)=><Card  key = {product?.id} product = {product}/>)

}</div>
}
export default Cart