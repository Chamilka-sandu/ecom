import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
  apiKey: "AIzaSyAstYmtQ7EIW_jUN1GRovX5R5iRYA-v7uw",
  authDomain: "ecommerceapp-e7798.firebaseapp.com",
  projectId: "ecommerceapp-e7798",
  storageBucket: "ecommerceapp-e7798.appspot.com",
  messagingSenderId: "210467284415",
  appId: "1:210467284415:web:946f69ab6ed23a15002d0a",
  measurementId: "G-DCZE981E8N"
};

   const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

