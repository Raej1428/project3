import { SET_USER, LOGOUT, GET_ERRORS } from "./constants";
import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from "../helpers/setAuthToken";

// Register user
export const registerUser = (userdata, history) => dispatch => {
  localStorage.setItem("userId", userdata._id );
	axios
		.post("/api/user/register", {
			userdata
		})
		.then(res => {
			history.push("/login");
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				data: err.response.data
			})
		);
};

// Login user
export const loginUser = userdata => dispatch => {
  
	axios
		.post("/api/user/login", {
			userdata
		})
		.then(res => {
			if (res.data.token) {
				const { token } = res.data;
				localStorage.setItem("jwtToken", token);
				setAuthToken(token);
				const decoded = jwtDecode(token);
				dispatch(setCurrentUser(decoded));
			}
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				data: err.response.data
			});
		});
};

// Logout user
export const logout = () => dispatch => {
	localStorage.removeItem("jwtToken");
	setAuthToken(false);
	dispatch(setCurrentUser({}));
};

// Set current user authenticated
export const setCurrentUser = decoded => {
	switch (decoded.typeOfUser) {
		case "User":
			return {
				type: SET_USER,
				data: decoded
			};
		default:
			return {
				type: LOGOUT,
				data: {}
			};
	}
};