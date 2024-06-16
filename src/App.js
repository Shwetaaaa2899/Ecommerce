import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route,NavLink} from "react-router-dom"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import Navbar from "./components/navbar/Navbar"
import RequiresAuth from "./components/requiresauth/RequiresAuth"
import Login from "./pages/auth/Login"
import ProductDetail from "./pages/product/ProductDetail"
import NoResource from "./pages/noResource/NoResource"

function App() {
  return (
    <div className="App">
         <Navbar />
      <ToastContainer
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      
      <Routes>
        <Route exact path = "/" element = {<Home/>} />

        <Route path  = "/products/:id" element ={<ProductDetail/>} />
        <Route path  = "/cart" element ={<RequiresAuth><Cart/></RequiresAuth>} />
       
       
        <Route path  = "/login" element ={<Login/>} />
        <Route path  = "*" element={<NoResource/>} />

      </Routes> 
    </div>
  );
}

export default App;
