import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuOnNpcbPA-UTlBRpBgNnBpICcZllEpEU",
    authDomain: "jurnal-f9f32.firebaseapp.com",
    projectId: "jurnal-f9f32",
    storageBucket: "jurnal-f9f32.appspot.com",
    messagingSenderId: "706674402158",
    appId: "1:706674402158:web:fcd8da889371abfeda577f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();