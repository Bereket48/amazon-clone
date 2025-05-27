import firebase from "firebase/compat/app"; //modified from the initialization code
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export default firebaseConfig;

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

// ⚠️ Issues and Best Practice Warnings:
// Mixing Modular and Compat SDKs:

// Using both firebase/compat and the modular API (getAuth) is not recommended.

// Pick one: either use the modular SDK (preferred for tree-shaking and smaller bundle size) or stick with the compat version if you're migrating an older project.

// ✅ Recommended: Use Full Modular SDK (Preferred)
// Here’s how your code would look using only the modular Firebase SDK (cleaner and more modern):

// // Import only what you need from the modular SDK
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA2Rhy0C_8dQ5xbY3qVmZ409c11L1rXwRg",
//   authDomain: "clone-2eb37.firebaseapp.com",
//   projectId: "clone-2eb37",
//   storageBucket: "clone-2eb37.appspot.com",
//   messagingSenderId: "961007279109",
//   appId: "1:961007279109:web:26ec5b1b8b78bb95e5506c",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
