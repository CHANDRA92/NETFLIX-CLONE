import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqk9phCRGavSep4WicI2WhdHRiuTTQV5g",
  authDomain: "netflix-ui-dbbc4.firebaseapp.com",
  projectId: "netflix-ui-dbbc4",
  storageBucket: "netflix-ui-dbbc4.appspot.com",
  messagingSenderId: "42178225170",
  appId: "1:42178225170:web:29c2677663cd6dd0a064cb",
  measurementId: "G-NR30T2F2E1"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);