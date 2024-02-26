import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBGXsdIugdUEEv3S3-WBasnMHwxLoIo6o8",
  authDomain: "feedback-fleet-dd8ad.firebaseapp.com",
  projectId: "feedback-fleet-dd8ad",
  storageBucket: "feedback-fleet-dd8ad.appspot.com",
  messagingSenderId: "905908753751",
  appId: "1:905908753751:web:c1b2117ed2454bec4cda12"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
console.log(db);