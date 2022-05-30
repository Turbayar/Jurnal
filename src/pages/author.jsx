import React from "react";
import { db } from "../firebase";
import { doc, collection, setDoc, onSnapshot } from "firebase/firestore";

import NavBar from "../components/Navbar";
import PostList from "../components/PostList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "blue"
  },
});
// setDoc(doc(db, "posts", "X4sOcYVdHpekUeEANnH9"), {});

const Author = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <CssBaseline />
      <NavBar />

      <main>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            sx={{ marginTop: "100px" }}
          >
            Postloy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Discover stories, thinking, and expertise from writers on any topic.
          </Typography>
        </Container>
      </main>

      <PostList />
    </div>
  );
};

export default Author;
