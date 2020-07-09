import firebaseDB from "../../BlogPage/firebase-redux/firebase";

export const logoutUser = () => {
 
    return async function(dispatch){
 
        await firebaseDB.logout();
        dispatch({type: "LOGIN_USER", payload: {} });
        dispatch({type: "CREATE_USER", payload: {} });
  
    }
 

}