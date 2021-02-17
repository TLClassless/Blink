// Firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBD5h4r7SWy-0TDgLuec_EGxMz9cySX7QA",
  authDomain: "blink-31c54.firebaseapp.com",
  projectId: "blink-31c54",
  storageBucket: "blink-31c54.appspot.com",
  messagingSenderId: "6448430327",
  appId: "1:6448430327:web:2ff9611bba95af9ecbe7f2",
  measurementId: "G-XR7P2MD7VP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
