// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFYV8Eeu38lIcH3_72oxaVfAEinUWsVSs",
  authDomain: "bluesky-e4e49.firebaseapp.com",
  projectId: "bluesky-e4e49",
  storageBucket: "bluesky-e4e49.firebasestorage.app",
  messagingSenderId: "344482957491",
  appId: "1:344482957491:web:a6371efcc38bdbd29148c6",
  measurementId: "G-BBPFG46K9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);