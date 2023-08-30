import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  // Paste your firebase config here
    apiKey: "AIzaSyBe1_zAA26-CxVSE_Wv5r493EBiBdHjdYI",
    authDomain: "facciando-f91c1.firebaseapp.com",
    projectId: "facciando-f91c1",
    storageBucket: "facciando-f91c1.appspot.com",
    messagingSenderId: "421267755080",
    appId: "1:421267755080:web:f7edc848bdd381efc9487d"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)