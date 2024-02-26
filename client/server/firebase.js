import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBEBAO26pUyzUmco1FJT5xxpL3C5EvXrU",
  authDomain: "feedback-fleet.firebaseapp.com",
  projectId: "feedback-fleet",
  storageBucket: "feedback-fleet.appspot.com",
  messagingSenderId: "724476189681",
  appId: "1:724476189681:web:fe75bf9d2f8896cc2a4250",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
