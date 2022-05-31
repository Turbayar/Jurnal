import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";
import { db, auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  collection,
  setDoc,
  addDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

import { ThemeComponent } from "./theme";
import addStudent from "./pages/AddStudent/AddStudent.jsx"
import Dashboard from "./pages/dashboard";
import Login from "./pages/login/login.jsx";
import "./App.css";
import AddStudent from "./pages/AddStudent/AddStudent.jsx";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const getData = async (uid) => {
    const docRef = doc(db, "current-users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setUser(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        getData(uid);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <ThemeComponent>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
     </ThemeComponent>
  );
}

export default App;
