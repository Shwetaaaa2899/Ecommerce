import axios from "axios";

export const getAllProducts = async() =>{
    try{
        const request = await axios.get("https://fakestoreapi.com/products")
        const response = await request.data
        return response
    }
    catch(e){
        console.log("error occured while fetching products",e)
    }
}


export const getAllProductById = async(id)=>{
    try{
        const request = await axios.get(`https://fakestoreapi.com/products/${id}`)
      
        const response = await request.data
        // console.log("data6",response)
        return response
    }
    catch(e){
        console.log("error occured while fetching products",e)
    }
}

export const getAllCartProducts = async() =>{
    try{
        const request = await axios.get("https://fakestoreapi.com/carts/5")
    
        const response = await request.data
        // console.log("req for cart",response)
        return response
    }
    catch(e){
        console.log("error occured while fetching products",e)
    }
}

export const addProductToCart = async(product)=>{
    try{
        const request = await axios.post('https://fakestoreapi.com/carts',product
            )
      
        const response = await request.data
        // console.log("after adding in cart",response)
        return response
    }
    catch(e){
        console.log("error occured while adding to wishlist products",e) 
    }
}
export default {getAllProducts, getAllProductById,addProductToCart,getAllCartProducts}