import axios from "axios";

export const getAllProducts = async () => {
  try {
    const request = await axios.get("https://fakestoreapi.com/products");
    const response = await request.data;
    return response;
  } catch (e) {
    console.log("error occured while fetching products", e);
  }
};

export const getAllProductById = async (id) => {
  try {
   
    const request = await axios.get(`https://fakestoreapi.com/products/${id}`);

    const response = await request.data;
    console.log("of api",response)
    return 123;

  } catch (e) {
    console.log("error occured while fetching products", e);
  }
};

export const getAllCartProducts = async () => {
  try {
    const request = await axios.get("https://fakestoreapi.com/carts/user/1");
    const response = await request.data;
    console.log("req for cart", response);
    return response;
  } catch (e) {
    console.log("error occured while fetching products", e);
  }
};

export const addProductToCart = async ({ userId, date, products }) => {
  try {
    console.log("prod in api", userId, date, products);
    const request = await axios.post("https://fakestoreapi.com/carts", {
      userId,
      date,
      products,
    });

    const response = await request.data;
    console.log("res", response);
    return response;
  } catch (e) {
    console.log("error occured while adding to wishlist products", e);
  }
};

const increaseCartQuant = async (product) => {
  try {
    const request = axios.put(
      `https://fakestoreapi.com/carts/${product?.id}`,
      product
    );
  } catch (e) {
    console.log("some issue occured while updating quantity");
  }
};
export default {
  getAllProducts,
  getAllProductById,
  addProductToCart,
  getAllCartProducts,
};
