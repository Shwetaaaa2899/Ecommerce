
export const productsReducer  = (state,action) =>{
   

    switch(action.type){
        case "SET-PRODUCTS":
            console.log("action called for prod",action.payload)
            return {...state, products:action.payload}
  
       case "SET-LOADER-ON":
       return {...state,loading:true}
       case "SET-LOADER-OFF":
        return {...state,loading:false}
        case "SET-STAR_RATING":
          console.log(" STAR_RATING reducer",action.payload)
          return {...state, starRating:action.payload}
        case "CLEAR-PRODUCT-IN-DETAIL":
          return { ...state,ProductToBeDetailed:{},loading:true}
           
        case "PRODUCT-IN-DETAIL":
           
            return { ...state,ProductToBeDetailed:action.payload}
            case "SEARCH":
              console.log("esrach in reducer",action.payload)
              return {...state,search:action.payload}
              case "SORT":
                return {...state,sort:action.payload}
    
                case "CATEGORY":
                  
               return  {...state, categoryInput:action.payload,allFlag : !state.allFlag}
               case "GENRE":
               
                
               return  state.genre.includes(action.payload)?{...state,genre:state.genre.filter((type) => type !== action.payload)}
              :
                {...state, genre:[...state.genre,action.payload]}
    
                case "RANGE":
                  
                 const { name,value} = action.payload
              
    
                  return {...state,[name]:Number(value)}
                  case "DISPLAY-ALL-PRODUCTS":
               
                   
    
                    return    {
                      
                      ...state,
                       all:!state.all
                         }
               
                 case "CLEAR-FILTER":
                 
                 return    {
                      
                     ...state,
                     genre:[],
                     starRating:-1,
                     loading:false,
                     maximumPrice:4000,
                     minimumPrice:297,
                     price:297,
                     sort: "",
                     search: "",
                     categoryInput:"",
                     all:false
                        }
         default:
                    return state
    
    }
    
    
    }
    
    export const initialState = {islaoding:true,
        products :[],
        product :{},
    loading:false,
        genre:[],
        starRating:-1,
        maximumPrice:4000,
        minimumPrice:297,
        price:297,
        sort: "",
        search: "",
        categoryInput:"",
        all:false
       
        }

