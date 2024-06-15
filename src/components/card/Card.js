import { Link } from "react-router-dom"
const Card = ({product}) =>{
    return <div>
        {/* <div>{product?.des}</div> */}
        {product?.title}
        <Link to={`products/${product?.id}`}
        >Details
        </Link>
    </div>
 }
 export default Card