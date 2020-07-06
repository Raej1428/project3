import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import "../Sections/actions";

const initialState = {
  posts: [{ id: 1, name: "JaneFonda", title: "You Love my Abs", category: "Abs", details: "50 crunches, 15 V-Ups, 15 sit-ups"}, 
  { id: 2, name: "BlainFonda", title: "Arms are SHREDDED!", category: "Arms", details: "50 bicep-curls, 15 pullups, 15 pushups"}]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.data]
      }
    default:
      return state;
  }
};

// Combine each fetch reducer and the user reducer:

const allReducers = {
  reducer: reducer,
  firebase: firebaseReducer,
};

// Export the root reducer
const rootReducer = combineReducers(allReducers);
export default rootReducer;