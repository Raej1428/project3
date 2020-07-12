import firebaseDB from './firebase';
import "firebase/firestore"

/* Intitialize the firestore database */
const firestoreDB = firebaseDB.firestore();
firestoreDB.settings({
	ignoreUndefinedProperties: true
});

/* Export the firestore database */
export default firestoreDB;
