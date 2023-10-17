// https://stackoverflow.com/a/70564696
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

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
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();
const database = getFirestore();

export { database, storage, signInWithPopup }

