// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiTw9W-37kJ6hnB_TL4n34zig7OilyyU",
  authDomain: "expensetracker-30b26.firebaseapp.com",
  projectId: "expensetracker-30b26",
  storageBucket: "expensetracker-30b26.appspot.com",
  messagingSenderId: "525823560134",
  appId: "1:525823560134:web:b32bb2e00dee51cf22cac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)