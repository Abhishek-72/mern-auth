// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-71a23.firebaseapp.com",
  projectId: "authentication-71a23",
  storageBucket: "authentication-71a23.appspot.com",
  messagingSenderId: "160531856320",
  appId: "1:160531856320:web:d16a393dc861c4b21c6625",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
