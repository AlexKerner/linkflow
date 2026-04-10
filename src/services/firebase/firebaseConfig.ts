// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// @ts-ignore
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB74mIG1-PANwdyCd3rtol2wqUrLdjp5Nk",
  authDomain: "linkflow-91be2.firebaseapp.com",
  projectId: "linkflow-91be2",
  storageBucket: "linkflow-91be2.firebasestorage.app",
  messagingSenderId: "66609899203",
  appId: "1:66609899203:web:da94a9e8e113e481c16476"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});