export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAu1wtzf2jxl1dAliuDnL7Z5fhaQQTllg2jEEF83Jw9WLtWaZ…588o1HsoimGD1yczJXO0JnNNsqe5dbxfgNR0drWjnSHnIfCLI",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER": //listener
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
