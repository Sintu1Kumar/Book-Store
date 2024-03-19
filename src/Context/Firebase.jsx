import { createContext, useContext } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBxOzjFIW4qwnseChwYa4emKzdhH8_4P3c",
  authDomain: "book-store-121f9.firebaseapp.com",
  projectId: "book-store-121f9",
  storageBucket: "book-store-121f9.appspot.com",
  messagingSenderId: "749873561449",
  appId: "1:749873561449:web:cd3c9a4b007b65839047f8",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, signInUserWithEmailAndPassword }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
