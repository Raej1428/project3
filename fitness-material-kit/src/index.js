import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import setAuthToken from "./helpers/setAuthToken";
import jwt_decode from "jwt-decode";
import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import RecipePage from "./views/RecipePage/RecipePage.js";
import WorkoutPage from "./views/WorkoutPage/WorkoutPage.js";
import BlogPage from "./views/BlogPage/BlogPage.js";

import { setCurrentUser } from "./actions/authorizationAction";
// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
}

var hist = createBrowserHistory();

const initialState = {
  posts: []
}

function reducer(state = initialState, action) {
  console.log(action, "hooray");
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.data]
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/blog-page" component={BlogPage} />
        <Route path="/workout-page" component={WorkoutPage} />
        <Route path="/recipe-page" component={RecipePage} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/register-page" component={RegisterPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
