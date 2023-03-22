import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNoacBHdSvqhdLaaBkwOCFL72XdVosizU",
  authDomain: "el-gremio.firebaseapp.com",
  projectId: "el-gremio",
  storageBucket: "el-gremio.appspot.com",
  messagingSenderId: "603096644531",
  appId: "1:603096644531:web:6e9f7b8e9fdb4b356a29c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)