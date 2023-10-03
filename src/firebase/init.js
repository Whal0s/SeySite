// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrTK3YQMGKA55stIjn1jNsyFx51mWw7aU",
    authDomain: "seysite-f385b.firebaseapp.com",
    projectId: "seysite-f385b",
    storageBucket: "seysite-f385b.appspot.com",
    messagingSenderId: "255313577971",
    appId: "1:255313577971:web:1c7fc2a0331c1ddd47b486",
    measurementId: "G-W9Z09Q0EWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
export default db