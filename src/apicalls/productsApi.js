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
export const getFlattenCartData = (cartArr) => {
    const cartsAdded = cartArr
      ?.map((product) => (product?.userId === 1 ? product?.products : null))
      .flat();
    const cartForUser = cartsAdded?.reduce(
      (acc, product) => {
        // Check if productId already exists in accumulator
        const existingProductIndex = acc?.findIndex(
          (p) => p.productId === product?.productId
        );
        if (existingProductIndex === -1) {
          // If productId doesn't exist, add product to accumulator
          acc.push(product);
        }

        return acc;
      },
      [cartsAdded[0]]
    );
    return cartForUser;
  };

export const getAllCartProducts = async () => {
  try {
    const request = await axios.get("https://fakestoreapi.com/carts/user/1");
    const response = await request.data;
    
    return response;
  } catch (e) {
    console.log("error occured while fetching products", e);
  }
};

export const addProductToCart = async ({ userId, date, products }) => {
  try {
    console.log("prod in api", userId, formatDate(date), products);
    const request = await axios.post("https://fakestoreapi.com/carts", {
      userId,
      date:formatDate(date),
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
export const  formatDate=(date)=> {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
export default {
  getAllProducts,
  getAllProductById,
  addProductToCart,
  getAllCartProducts,
};