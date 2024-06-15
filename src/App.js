import './App.css';
import {getAllProducts} from "./apicalls/productsApi"
import {Routes,Route,NavLink} from "react-router-dom"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import ProductDetail from "./pages/product/ProductDetail"
function App() {
  // console.log("api",getAllProducts())
  return (
    <div className="App">
      app
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path  = "/products/:id" element ={<ProductDetail/>} />
        <Route path  = "/cart" element ={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
