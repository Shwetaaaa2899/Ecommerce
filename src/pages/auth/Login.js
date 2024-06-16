import { useAuthContext } from "../../context/authContext"
import { useNavigate} from "react-router-dom"
import { useState} from "react"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";
import "./Login.css"
const Login = ()=> {

  const navigate = useNavigate();
  const {loginHandler} = useAuthContext()
  const guestModeData = {
    adress: {
      city: "kilcoole",
      number: 7682,
      street: "new road",
      zipcode: "12926-3874",
      geolocation: { lat: "-37.3159", long: "81.1496" },
    },
    name : {firstname: 'john', lastname: 'doe'},
    password   :  "m38rmF$",
   phone:  "1-570-236-7033",
     username: "johnd"
    
  }


  const [authInfo, setAuthInfo] = useState(guestModeData)
  const [passwordVisible, setPasswordVisible] = useState(false);

  


  const loginAsGuestHandler = () => {
    loginHandler(authInfo);
    toast("Logged in Successfully ")
    navigate("/")

  };

return (
  <div>

    <div className="login-container">
     
        <div className="form-box">
         

          <form className="form-login" >
          
              <label>
                <p>
                  <h3>Username:</h3>

                  <input
                    required
                    value={authInfo?.username}
                    type="text"
                    name="username"
                    placeholder="Your username"
                  />    
                </p>
              </label>

              <label>
                <p>
                  <h3>Password:</h3>
                  <div className="password-input">
                  <input
                    required
                    value={authInfo?.password}
                    className="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                  
                    placeholder="Password"
                  />
                    <span
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                      </div>
                </p>
              </label>

              <div className="btn-login-container">
               
                <button type = "submit" onClick={loginAsGuestHandler} className="submitBtn">
                  Login As Guest?
                </button>
              </div>

         
          </form>
        
        </div>
      </div>

  </div>
);

}
export default Login