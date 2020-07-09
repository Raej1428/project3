import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import createUser from "../../LoginPage/reducers/signin";
import loginUser from "../../LoginPage/reducers/login";
import logoutUser from "../../LoginPage/reducers/logout";
import createPost from "./create"


// Combine each fetch reducer and the user reducer:
const allReducers = {
	firebase: firebaseReducer,
	signIn: createUser,
	logIn: loginUser,
	logOut: logoutUser,
	createPost: createPost,
};

// Export the root reducer
const rootReducer = combineReducers(allReducers);
export default rootReducer;