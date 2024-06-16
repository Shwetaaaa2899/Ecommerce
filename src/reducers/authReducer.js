export const initialState = {
  token: null,

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
    name: { firstname: "john", lastname: "doe" },
    password: "m38rmF$",
    phone: "1-570-236-7033",
    username: "johnd",
  },
];
localStorage.setItem("address", JSON.stringify(guestData));
export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET-TOKEN":

      return { ...state, token: action.payload, isloggedIn: true };

    case "LOGOUT":
      return {
        token: null,

        isloggedIn: false,
      };

    default:
      return {
        token: null,

        isloggedIn: false,
      };
  }
};
