import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAb0E-nEljF3Esbu15XatWrDl7Ff2aMKqM",
  authDomain: "chromeextensiontest-4bc82.firebaseapp.com",
  projectId: "chromeextensiontest-4bc82",
  storageBucket: "chromeextensiontest-4bc82.appspot.com",
  messagingSenderId: "870734043346",
  appId: "1:870734043346:web:fd4d445f7e0bd43037f50b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
