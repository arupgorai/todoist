import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_APIKEY,
    apiKey: "AIzaSyDhmTWowerd6yLTk6d5xLZIv0cXACXxEVI",
    authDomain: "todoist-524ec.firebaseapp.com",
    databaseURL: "https://todoist-524ec.firebaseio.com",
    projectId: "todoist-524ec",
    storageBucket: "todoist-524ec.appspot.com",
    messagingSenderId: "729791003325",
    appId: "1:729791003325:web:8abcb86020d11f9fd515d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
firebase.firestore();


export default firebase;