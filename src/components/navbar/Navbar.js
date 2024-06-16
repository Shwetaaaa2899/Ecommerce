import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";
import { useCartContext } from "../../context/cartContext";
import { IoIosLogOut } from "react-icons/io";
import "./navbar.css";
import { useEffect } from "react";
export default function Navbar() {
  const {
    dispatch,
    state: { token },
  } = useAuthContext();
  const {
    state: { cart },getCartProducts,dispatch :cartDispatch
  } = useCartContext();

  const logoutHandler = () => {
    cartDispatch({type:"EMPTY-CART"})
    dispatch({ type: "LOGOUT" });
    toast("You have been logged out");
  };
  useEffect(()=>{
    console.log("token",token)
  token !== null ?
    getCartProducts()
    :
    cartDispatch({type:"EMPTY-CART"})

  },[token])
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              {" "}
              <h2>
                <span>S</span>hopizon
              </h2>{" "}
            </NavLink>
          </div>

          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">
                  <MdOutlineExplore
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </NavLink>
              </li>

             
              <li>
                <NavLink to="/cart">
                  <FaShoppingCart
                    style={{ color: "black", fontSize: "25px" }}
                  />
                  {token && cart?.length}
                </NavLink>
              </li>

              <li>
                {token !== null ? (
                <div onClick={logoutHandler}>
                      <IoIosLogOut
                        style={{ color: "black", fontSize: "25px" }}
                      />
                    </div>
                 
                ) : (
                  <NavLink to="/login">
                    {" "}
                    <RiAccountCircleFill
                      style={{ color: "black", fontSize: "25px" }}
                    />
                  </NavLink>
                )}
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
