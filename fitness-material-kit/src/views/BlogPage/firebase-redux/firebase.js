import firebase from 'firebase/app';

/* Load the firebase configuration from process environment */
const firebaseConfig = {
	apiKey: "AIzaSyBY1-7DzAUkyJ73DPVs6fsT0ZhEAG_yjN0",
	authDomain: "fitnessapplication-f0d25.firebaseapp.com",
	databaseURL: "https://fitnessapplication-f0d25.firebaseio.com",
	projectId: "fitnessapplication-f0d25",
	storageBucket: "fitnessapplication-f0d25.appspot.com",
	messagingSenderId: "336599817004",
	appId: "1:336599817004:web:18abe5f68601fbf9d06a89",
	measurementId: "G-1PBP5ZDHGL",
};

/* Instantiate firebase */
const firebaseDB = firebase.initializeApp(firebaseConfig);

/* Export firebase */
export default firebaseDB;
