import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMQiPD49AHukVA85Ja1MISiuboiXHXnRQ",
  authDomain: "login-auth-58ca2.firebaseapp.com",
  projectId: "login-auth-58ca2",
  storageBucket: "login-auth-58ca2.appspot.com",
  messagingSenderId: "29151125014",
  appId: "1:29151125014:web:186816a5113c8a42911f37"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;