import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB74hyCpmXKxk771OcdioIoq_z3rsXA6OM",
  authDomain: "tiktok---jornada-2d662.firebaseapp.com",
  projectId: "tiktok---jornada-2d662",
  storageBucket: "tiktok---jornada-2d662.appspot.com",
  messagingSenderId: "525394208887",
  appId: "1:525394208887:web:666841b8975c68504cfe72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;