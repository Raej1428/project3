import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { ReactReduxFirebaseProvider }from 'react-redux-firebase';
import firebase from 'firebase/app';
// import setAuthToken from "./helpers/setAuthToken";
// import jwt_decode from "jwt-decode";
import "./assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import RecipePage from "./views/RecipePage/RecipePage.js";
import WorkoutPage from "./views/WorkoutPage/WorkoutPage.js";
import BlogPage from "./views/BlogPage/BlogPage.js";
import { createStore } from 'redux';
import rootReducer from './views/BlogPage/reducers/reducer';
// import { setCurrentUser } from "./actions/authorizationAction";
// Check for token
// if (localStorage.jwtToken) {
// 	// Set auth token header auth
// 	setAuthToken(localStorage.jwtToken);
// 	// Decode token and get user info
// 	const decoded = jwt_decode(localStorage.jwtToken);
// 	// Set user and isAuthenticated
// 	store.dispatch(setCurrentUser(decoded));
// }

const hist = createBrowserHistory();

const store = createStore(
	rootReducer
)
console.log(store.getState())

// react-redux-firebase config
const rrfConfig = {
  firebase,
  store: store,
	config: {
    enableLogging: true },
    dispatch: store
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfConfig}>
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
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();