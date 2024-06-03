import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtGmy2-WnWPEJtNIgWYRFjB1eUMI9gIqY",
  authDomain: "cecha-proyectoreactjs.firebaseapp.com",
  projectId: "cecha-proyectoreactjs",
  storageBucket: "cecha-proyectoreactjs.appspot.com",
  messagingSenderId: "292547296366",
  appId: "1:292547296366:web:ba5718ee6410d024233a7f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);