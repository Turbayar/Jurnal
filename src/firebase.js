import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEQp3h7h2eP1w8EpOy5PvoyPf1lIvFfJo",
    authDomain: "fir-auth-test-b358c.firebaseapp.com",
    projectId: "fir-auth-test-b358c",
    storageBucket: "fir-auth-test-b358c.appspot.com",
    messagingSenderId: "706065178375",
    appId: "1:706065178375:web:42f1582da007468006afa2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();