// Import the functions you need from the SDKs you need
import { initializeApp, getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzcuLYLvmhbjHqgGtRv36Gpjtl0uZFFP4",
  authDomain: "flashcardsapi-4701e.firebaseapp.com",
  projectId: "flashcardsapi-4701e",
  storageBucket: "flashcardsapi-4701e.appspot.com",
  messagingSenderId: "631500038191",
  appId: "1:631500038191:web:bcfe72724649f485d4a6da",
  measurementId: "G-LY44ES2T4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app