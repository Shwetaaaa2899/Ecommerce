import { Navigate } from "react-router-dom"
import { useAuthContext} from "../../context/authContext"
import { useLocation } from "react-router-dom"

 const RequiresAuth = ({children}) =>{
    const {state:{token}} = useAuthContext()
    const location = useLocation()

return token?children:

<Navigate to = "/login"  state = {{from:location}}/>


}


export default RequiresAuth