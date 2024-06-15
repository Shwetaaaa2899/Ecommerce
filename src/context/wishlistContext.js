const addToWishlist = async(id) =>{
    try{
        const response = await addProductToWishlist(id)
        dispatch({type:"ADD-TO-WISHLIST", payload:response})
    }
    catch(e){
        
    }
  }