import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, getDocs,onSnapshot,doc  } from "firebase/firestore";
import { db } from "../firebase";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (col) => {
      const myList = col.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPosts(myList.filter((cur) => cur.status));
  }); 

    // const getData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   const myList = querySnapshot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });
    //   setPosts(myList.filter((cur) => !cur.status));
    // };
    // getData();

    return () => unsub();
  }, []);

  return (
    <div>
      {posts.map((cur, index) => {
        return <Post key={`post-${index}`} data={cur} />;
      })}
    </div>
  );
}
