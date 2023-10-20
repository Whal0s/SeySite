// https://stackoverflow.com/a/70564696
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

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

// TODO: fix firebase rules to
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();
const database = getFirestore();

//Authentication
const provider = new OAuthProvider('microsoft.com');
const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.

        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
    })
    .catch((error) => {
        // Handle error.
    });

export { database, storage, signInWithPopup }

