// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad para todos, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
const firebaseConfig = {
  apiKey: "AIzaSyB12Z-v7_PGugMNJg8VTXRPQbqphZ1h8d4",
  authDomain: "c26242-537ed.firebaseapp.com",
  projectId: "c26242-537ed",
  storageBucket: "c26242-537ed.firebasestorage.app",
  messagingSenderId: "934185101606",
  appId: "1:934185101606:web:5e0c1e42d9e99a873539e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };
