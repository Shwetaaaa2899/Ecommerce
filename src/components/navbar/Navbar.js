// import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Navbar() {
  //   const {
  //     dispatch,
  //     state: { token },
  //   } = AuthContext();
  //   const {
  //     state: { cart },
  //   } = CartListState();
  //   const { filterDispatch } = CartState();

    const searchEventHandler = (e) => {
    //   filterDispatch({ type: "SEARCH", payload: e.target.value });
    };

  //   const logoutHandler = ()=>{
  //     dispatch({ type: "LOGOUT" })
  //     toast("You have been logged out")
  //   }
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
          <div className="input-wrapper">
            <AiOutlineSearch />
            <input
              className="search-input"
              type="text"
              placeholder="search your fav products"
              onChange={searchEventHandler}
            />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">
                  Explore <MdOutlineExplore />
                </NavLink>
              </li>

            

              <li>
                <NavLink to="/login">
                  {" "}
                  <RiAccountCircleFill
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <FaShoppingCart
                    style={{ color: "black", fontSize: "25px" }}
                  />
                  {/* {token && cart?.length} */}
                
                </NavLink>
              </li>

{/* <NavLink to= "/users" >all user
</NavLink> */}
              {/* {token && (
                <li>
                  {" "}
                  <div onClick={logoutHandler}>Log out</div>
                </li>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
