export const initialState = {
  token:
    localStorage.getItem("loginDetails")?.length > 0
      ? JSON.parse(localStorage.getItem("loginDetails")).token
  : null,
  // profile:
  //   localStorage.getItem("loginDetails")?.length > 0
  //     ? JSON.parse(localStorage.getItem("loginDetails")).user
  //     : null,
  // isloggedIn: localStorage.getItem("loginDetails")?.length > 0 ? true : false,
  // address:
  //   localStorage.getItem("address")?.length > 0
  //     ? JSON.parse(localStorage.getItem("address"))
  //     : [],
  userDetailsForSignup: {},
  validatedUser: {},
  isLoggedIn: false,
};
const guestData = [
  {
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
     username: 
    "johnd"
    
  },
];
localStorage.setItem("address", JSON.stringify(guestData));
export const authReducer = (state, action) => {
  switch (action.type) {
  
      case "SET-TOKEN": 
       console.log("token reducer",action.payload)

        return {...state,token :action.payload, isloggedIn:true}

    // case "SET-PROFILE":
    //     console.log("profile call'", action.payload);
    //     return { ...state, profile: action.payload, isLoggedIn: true };
    //   case "EDIT-PROFILE-INFO":
    // return { ...state, profile: action.payload };
    // case "ADD-ADDRESS":
    // //   console.log(action.payload, "addiing address");
    //  const FinalAddress = [...state.address, action.payload];
    //   console.log(FinalAddress);
    //   localStorage.setItem("address", JSON.stringify(FinalAddress));
    //   return { ...state, address: FinalAddress };

    case "LOGOUT":
      return {
        token: null,
        profile: {},
        isloggedIn: false,
        address: [],
        loggedIn: false,
      };

    default:
      return {
        token: null,
        profile: {},
        isloggedIn: false,
        address: [],
        loggedIn: false,
      };
  }
};
