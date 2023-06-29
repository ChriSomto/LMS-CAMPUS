import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBL68ySTXIgsQsv46MyykXEd-nNDlR2rtU",
  authDomain: "lms-campus.firebaseapp.com",
  projectId: "lms-campus",
  storageBucket: "lms-campus.appspot.com",
  messagingSenderId: "122837695670",
  appId: "1:122837695670:web:82e4afc2d464a9eab93a17",
  measurementId: "G-DH4YXWQHXS"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
