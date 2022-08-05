// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0PWm7k-KNWhg71cKQLlMyAqal9NZ6xRo",
  authDomain: "react-quiz-b619d.firebaseapp.com",
  databaseURL:
    "https://react-quiz-b619d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-b619d",
  storageBucket: "react-quiz-b619d.appspot.com",
  messagingSenderId: "913553035151",
  appId: "1:913553035151:web:2b59f9ac257f42c54a45fa",
  // apiKey: "process.env.REACT_APP_API_KEY",
  // authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  // databaseURL: "process.env.REACT_APP_DATABASE_URL",
  // projectId: "process.env.REACT_APP_PROJECT_ID",
  // storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
  // messagingSenderId: "process.env.REACT_APP_MESSAGING_SENDER_ID",
  // appId: "process.env.REACT_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
