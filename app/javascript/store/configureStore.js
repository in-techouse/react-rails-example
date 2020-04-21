import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { REGISTER, LOGIN, LOGOUT } from "./action/actions";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  user: null,
  isLoggedIn: false,
  products: [],
};

const auIsKeyReducer = (state = initState, action) => {
  console.log("AuIsKey Reducer, Action is: ", action.type);
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case LOGIN:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.user,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default function configureStore() {
  const store = createStore(
    auIsKeyReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
