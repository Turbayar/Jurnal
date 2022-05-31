import { useEffect, useState } from "react";
import Post from "./Post";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

import DataGridDemo from "./DataGrid";
import EditData from "./EditData";
import DeleteData from "./DeleteData";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "students"), orderBy("firstName", "asc")),
      (col) => {
        const myList = col.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setPosts(myList);
      }
    );

    return () => unsub();
  }, []);

  const [userData, setUserData] = useState("");

  const handleClose = () => {
    setUserData("");
  };
  const handleOpen = (data) => {
    setUserData(data);
  };
  const [open2, setOpener] = useState("");
  const handleOpen2 = (data) => {
    setOpener(data);
  };
  const handleClose2 = () => {
    setOpener('');
  };
  return (
    <>
      <DataGridDemo
        posts={posts}
        handleOpen={handleOpen}
        handleOpen2={handleOpen2}
      />
      {userData && <EditData data={userData} handleClose={handleClose} />}
      <DeleteData open2={open2} handleClose2={handleClose2} />
    </>
  );
}
