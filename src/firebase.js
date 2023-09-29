
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_J9ko4WiSExmcGeYUS-A1hNRjnPKXKT8",
  authDomain: "swastha-sahayak.firebaseapp.com",
  projectId: "swastha-sahayak",
  storageBucket: "swastha-sahayak.appspot.com",
  messagingSenderId: "595423557557",
  appId: "1:595423557557:web:4a07101fbe9f39e3090bfc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);