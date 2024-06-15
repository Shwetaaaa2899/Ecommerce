import { useParams } from "react-router-dom"
import {useProductContextConsumer} from "../../context/productContext"
import { useEffect, useState } from "react"
import { CiHeart } from "react-icons/ci";
const ProductDetail = () =>{
const {id} = useParams()
const [product,setProduct] = useState(null)
const {addToWishlist, getProductById,state} = useProductContextConsumer()

useEffect(()=>{
 const fetchData =async()=>{
    const response =  await getProductById(id)
   setProduct(response)
 }
 fetchData()

      }
   
,[id])
    return <div> 
         {
            state?.loading ? <p>Loading....</p>
        :
        <div>
        {id}
        {product?.title}
        <CiHeart onClick= {()=>addToWishlist(id)}/>
        </div>}</div>
}
export default ProductDetail