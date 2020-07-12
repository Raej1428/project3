import {combineReducers} from "redux";
import createUser from "./signin";
import loginUser from "./login";
import logoutUser from "./logout";


const reducers= combineReducers({
    signIn: createUser,
    logIn: loginUser,
    logOut: logoutUser
});

export default reducers;