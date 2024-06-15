export const initialState = {
  token:
    localStorage.getItem("loginDetails")?.length > 0
      ? JSON.parse(localStorage.getItem("loginDetails")).token
      : null,
  profile:
    localStorage.getItem("loginDetails")?.length > 0
      ? JSON.parse(localStorage.getItem("loginDetails")).user
      : null,
  isloggedIn: localStorage.getItem("loginDetails")?.length > 0 ? true : false,
  address:
    localStorage.getItem("address")?.length > 0
      ? JSON.parse(localStorage.getItem("address"))
      : [],
  isLoggedIn: false,
};
const dummy = [
  {
    Name: "Adarsh Balika",
    type: "Work",
    line1: "400,A wing",
    area: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400010",
    phone: "0999099900",
  },
];
localStorage.setItem("address", JSON.stringify(dummy));
export const UserInfoReducer = (state, action) => {
  switch (action.type) {
    case "SET-TOKEN":
    //   console.log("token call", action.payload);
      return { ...state, token: action.payload, isLoggedIn: true };
    case "SET-PROFILE":
      console.log("profile call'", action.payload);
      return { ...state, profile: action.payload, isLoggedIn: true };
    case "EDIT-PROFILE-INFO":
      return { ...state, profile: action.payload };
    case "ADD-ADDRESS":
    //   console.log(action.payload, "addiing address");
     const FinalAddress = [...state.address, action.payload];
      console.log(FinalAddress);
      localStorage.setItem("address", JSON.stringify(FinalAddress));
      return { ...state, address: FinalAddress };

    case "LOGOUT":
      console.log("called out");
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
