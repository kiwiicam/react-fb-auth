
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDApN5q1wkRg-dPZ2S5pvvmKv6HKsN3f8c",
  authDomain: "react-auth-12c59.firebaseapp.com",
  projectId: "react-auth-12c59",
  storageBucket: "react-auth-12c59.appspot.com",
  messagingSenderId: "723297435890",
  appId: "1:723297435890:web:35fe592ecb4335e8aa506b",
  measurementId: "G-41JB2G57L4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app
