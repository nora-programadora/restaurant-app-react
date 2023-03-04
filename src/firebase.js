import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAK0P1sLgMD3_MD3H4ELnhgCn-LhZJDEcQ",
  authDomain: "crud-react-deac2.firebaseapp.com",
  projectId: "crud-react-deac2",
  storageBucket: "crud-react-deac2.appspot.com",
  messagingSenderId: "87035076128",
  appId: "1:87035076128:web:cbc763108b374e594ca645"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }