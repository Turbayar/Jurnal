import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "students"), (col) => {
      const myList = col.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPosts(myList);
    });

    return () => unsub();
  }, []);

  return (
    <>
      {posts?.map((cur, index) => (
        <Post key={index} data={cur} />
      ))}
    </>
  );
}
