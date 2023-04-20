import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_jVEmcVyaQO4TlMupRw2VM43Rjp37E_Y",
  authDomain: "growshop-ecommerce.firebaseapp.com",
  projectId: "growshop-ecommerce",
  storageBucket: "growshop-ecommerce.appspot.com",
  messagingSenderId: "16708316093",
  appId: "1:16708316093:web:70fe2d92903515b835c0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


