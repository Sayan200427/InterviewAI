
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-7842a.firebaseapp.com",
  projectId: "interviewai-7842a",
  storageBucket: "interviewai-7842a.firebasestorage.app",
  messagingSenderId: "571371100018",
  appId: "1:571371100018:web:418dfa9b6ac5e292ee2feb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export{auth , provider}