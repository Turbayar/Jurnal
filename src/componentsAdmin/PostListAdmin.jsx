import React, { useEffect, useState } from "react";
import PostAdmin from "./PostAdmin";
import { collection, getDocs,onSnapshot,doc } from "firebase/firestore";
import { db } from "../firebase";

export default function PostListAdmin({user}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (col) => {
      const myList = col.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPosts(myList.filter((cur) => !cur.status));
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

  console.log("posts", posts)

  return (
    <div>
      {posts.map((cur, index) => {
        return <PostAdmin key={`post-${index}`} data={cur} user = {user} />;
      })}
    </div>
  );
}
