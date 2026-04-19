// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDbYTYs_oSK2rvtzHxBCPFrqdXM-l7MokQ",
//   authDomain: "internshala-9e300.firebaseapp.com",
//   projectId: "internshala-9e300",
//   storageBucket: "internshala-9e300.firebasestorage.app",
//   messagingSenderId: "304425115290",
//   appId: "1:304425115290:web:1b0653f1acd4192b848923",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };






// Import required Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAArQ8vy3D4Mli2uY6UPUFh9MASspDlcGw",
  authDomain: "internshala-clone-3fad7.firebaseapp.com",
  projectId: "internshala-clone-3fad7",
  storageBucket: "internshala-clone-3fad7.firebasestorage.app",
  messagingSenderId: "155147674854",
  appId: "1:155147674854:web:0a176aaa98141fbe75c727",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export
export { auth, provider };
