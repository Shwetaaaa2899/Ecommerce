import { useActionData, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import { useCartContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./productDetail.css";
import { formatDate } from "../../apicalls/productsApi";
import { useAuthContext } from "../../context/authContext";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState(null);
  const { state, dispatch } = useProductContext();
  const { addProductToCartById ,state:{cart},handlecartlistCheck} = useCartContext();
  const {
    state: { token },
  } = useAuthContext();
  const cartListHandler = (product) => {
    if (token === null) {
      toast("Please login first to add in cart products");
      navigate("/login");
    } else if (handlecartlistCheck(product, cart)) {
   
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

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const request = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        const response = await request.data;
        console.log("resp", response);
        setProduct(response);
      } catch (e) {
        console.log("error occured while fetching details by product id");
      }
    };
    getProductById(id);
  }, [id]);
  console.log("prd", product);
  return (
    <div>
      {state?.loading ? (
        <ClipLoader loading={true} />
      ) : (
        product && (
          <div className="main-div">
            <div className="left-div">
              <div class="image">
                <img src={product.image} />
              </div>

              <div className="action-button-section">
                <button onClick={() => cartListHandler( product)}>
                  {handlecartlistCheck(product,cart)
                    ? "Go To Cart"
                    : "Add to Cart"}
                </button>

              </div>
            </div>
            <div className="right-div">
              <div className="product-details">
                <h1>{product.title}</h1>
                <small> {product.category}'s wear</small>
              </div>
              <div className="price-info">
                <p>Rating: {product.star} ⭐</p>

                <p>Price:₹ {product.price}</p>

                <p>
                  <span className="mrp">
                    MRP :₹
                    {product.price + 1000}
                  </span>{" "}
                  (50% off)
                </p>
              </div>
              <div className="description">
                <p>
                  <strong>Description: </strong>

                  {product.description}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default ProductDetail;
