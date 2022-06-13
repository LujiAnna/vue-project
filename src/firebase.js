// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiu9qTVNZLD2KuYJadqS6IcVs4EBjhIk0",
  authDomain: "vue-project-20305.firebaseapp.com",
  projectId: "vue-project-20305",
  storageBucket: "vue-project-20305.appspot.com",
  messagingSenderId: "1069698439855",
  appId: "1:1069698439855:web:f4d5eaeaafbed5c290925a",
  measurementId: "G-TH825HBG7Y"
};

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);

// Call Firebase auth
export const auth = getAuth(app);

// Get a reference to the database service 
const db = getDatabase(app);

// Create a database reference to our services inside our database and create service folder
const dbServiceRef = ref(db, 'services/');
export default dbServiceRef;
