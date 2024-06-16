import { useProductContext } from "../../context/productContext";
import { useCartContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import "./Card.css";
import { getAllProductById, formatDate } from "../../apicalls/productsApi";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Product({ product, inCart }) {
  const navigate = useNavigate();
  const {
    addProductToCartById,
    state: { cart,loading },
    dispatch,
    handlecartlistCheck,
    addQuantityOfProductInCart,
  } = useCartContext();
  const {
    state: { token, isLoggedIn },
  } = useAuthContext();

  const [productToBeShown, setProduct] = useState(product);
  const [isCartProduct, setCartProduct] = useState(inCart);
  const cartListHandler = (product) => {
    if (token === null) {
      toast("Please login first to add in cart products");
      navigate("/login");
    } else if (handlecartlistCheck(product, cart)) {
      setCartProduct(1);
      navigate("/cart");
    } else {
        dispatch({ type: "SET-LOADER-ON" });
      const productToBePassed = {
        userId: 1,
        date: formatDate(new Date()),
        products: [{ productId: product?.id, quantity: 1 }],
      };
      addProductToCartById(productToBePassed);
      dispatch({ type: "SET-LOADER-OFF" });
    }
  };
  const removeProductHandler = (product)=>{
    console.log("pr",product)
    dispatch({type: "REMOVE-FROM-CART", payload:product?.productId})
  }

  const increaseProductQuantity = (e, product) => {
    e.preventDefault();
    const data = {
      userId: 1,
      date: new Date().format("dd-m-yy"),
      products: [{ productId: product?.id, quantity: product?.quantity }],
    };
    addQuantityOfProductInCart(data);
  };

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const request = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        const response = await request.data;
console.log('response for id',response)
console.log(" {parseFloat(product?.price) + 1000}", typeof(response?.price))
        setProduct(response);
      } catch (e) {
        console.log("error occured while fetching details by product id");
      }
    };
    product?.productId && getProductById(product?.productId);
  }, [product]);

  return (
    
    <div className="card">
        {loading ? <p>Loading...</p>
        :<>
        
      <Link to={`/product/${productToBeShown._id}`}>
        <div className="card-img">
          <img src={productToBeShown?.image} />
        </div>
        <div className="star-div">{productToBeShown.star} ⭐</div>
        <div className="card-info">
          <h3 className="card-title">{productToBeShown.title}</h3>
          <small>
            {productToBeShown.genre === "men"
              ? "Men's Wear"
              : productToBeShown.genre === "women"
              ? "WoMen's Wear"
              : productToBeShown.genre === "sports"
              ? "Sports Wear"
              : productToBeShown.genre === "casual"
              ? "Casual Wear"
              : "Kid's Wear"}
          </small>

          <div className="price-details">
            <p>Price:₹ {productToBeShown?.price}</p>

            <p>
              <span className="mrp">
                MRP :₹
                {parseInt(product?.price) + 1000}
                {Number(product?.price) + 10}
              </span>{" "}
              (50% off)
            </p>
          </div>
        </div>
      </Link>

      {isCartProduct !== 1 ? (
        <div className="icons-section">
          <button onClick={() => cartListHandler(product)}>
            {handlecartlistCheck(product, cart) ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      )
    :
    <div className="icons-section">
    <button onClick={() => removeProductHandler(product)}>
Remove From Cart
    </button>
  </div>
    }
      </> }
    
    </div>

  );

}
