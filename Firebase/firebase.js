import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

/* NOS DIO PEREZA MOVER ESTO, LO IMPORTANTE ESTA EN MONGO XD */
const firebaseConfig = {
  apiKey: "AIzaSyDG-EvbMY-i59mFjl_jki9bGanLukBOSJA",
  authDomain: "facciando-1f494.firebaseapp.com",
  databaseURL: "https://facciando-1f494-default-rtdb.firebaseio.com",
  projectId: "facciando-1f494",
  storageBucket: "facciando-1f494.appspot.com",
  messagingSenderId: "693925915373",
  appId: "1:693925915373:web:45a8d3d092d5ea436b7ae4",
  measurementId: "G-E3B0E8T1TK"
};
/* NOS DIO PEREZA MSOVER ESTO, LO IMPORTANTE ESTA EN MONGO XD */

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)