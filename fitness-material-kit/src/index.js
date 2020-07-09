import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import Signin from "./views/LoginPage/components/Signin";
import 'firebase/auth'
import "./assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RecipePage from "./views/RecipePage/RecipePage.js";
import WorkoutPage from "./views/WorkoutPage/WorkoutPage.js";
import BlogPage from "./views/BlogPage/BlogPage.js";
import { createStore } from 'redux';
import rootReducer from './views/BlogPage/reducers/reducer';

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
    userProfile: 'users',
    enableLogging: true
  },
  dispatch: store.dispatch
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
          <Route exactpath="/signin" component={Signin} />
          <Route path="/" component={LandingPage} />
         
        </Switch>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();