// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Oib2H5ivnz5DOytRrx_kTZBETnE-yHU",
  authDomain: "web-design-and-developme-95849.firebaseapp.com",
  databaseURL: "https://web-design-and-developme-95849-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-design-and-developme-95849",
  storageBucket: "web-design-and-developme-95849.firebasestorage.app",
  messagingSenderId: "689848605743",
  appId: "1:689848605743:web:4ea16b360f0e03248dbada",
  measurementId: "G-1G9NCM9PLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);