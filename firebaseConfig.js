import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3Zd0HgIWB0riFtKYj8OXxA_fdDhYbovk",
  authDomain: "openroom-f581f.firebaseapp.com",
  projectId: "openroom-f581f",
  storageBucket: "openroom-f581f.appspot.com",
  messagingSenderId: "964409672244",
  appId: "1:964409672244:web:99ad1ae1a600437f00c061",
  measurementId: "G-J6MM97M0TG",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
