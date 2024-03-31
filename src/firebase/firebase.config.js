// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0imj2zhV8RD8asr-GPaXmc6w22xbedDU",
    authDomain: "auth-mohamilon-e8011.firebaseapp.com",
    projectId: "auth-mohamilon-e8011",
    storageBucket: "auth-mohamilon-e8011.appspot.com",
    messagingSenderId: "819145471580",
    appId: "1:819145471580:web:f965b2fd9fd7963a885899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;