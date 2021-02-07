import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAhlmmETrCcmDC0QwLXKazhrNUPQOfX18w",
    authDomain: "clone-a2e93.firebaseapp.com",
    projectId: "clone-a2e93",
    storageBucket: "clone-a2e93.appspot.com",
    messagingSenderId: "126104686260",
    appId: "1:126104686260:web:766881f9711ecef4a491e1",
    measurementId: "G-VPQ2M0NQLY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };