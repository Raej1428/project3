import firebaseDB from "../../BlogPage/firebase-redux/firebase";

export const createUser = (email, password) => {
 
    return async function(dispatch){
      
        const user = await firebaseDB.signin(email, password);
        console.log(user);
        dispatch({type: "CREATE_USER", payload: user});
      
    
    }

}