import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCh9uRr1qdsNOHzK7Aylwln7DIbOt-DkHs",
    authDomain: "ecommerce-d5a04.firebaseapp.com",
    projectId: "ecommerce-d5a04",
    storageBucket: "ecommerce-d5a04.appspot.com",
    messagingSenderId: "1021305050823",
    appId: "1:1021305050823:web:87a451c99bc6e7f46e50e2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
