import { useContext, createContext, useReducer } from "react";
import { initialState, authReducer } from "../reducers/authReducer";
import axios from 'axios'
const AuthProvider = createContext();
export const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer( authReducer,initialState);
  const loginHandler = async (userDetails) => {
    try {
    const {username,password} = userDetails
      const request = await axios.post("https://fakestoreapi.com/auth/login",{username,password})
      const response = await request.data
      
      dispatch({ type: "SET-TOKEN", payload: response.token });
    } catch (e) {
      console.log("some issue occured while doing login call ",e);
    }
  };


 return <AuthProvider.Provider value={{ state, dispatch, loginHandler }}>
    {children}
  </AuthProvider.Provider>;

};

export const useAuthContext = () => useContext(AuthProvider);
