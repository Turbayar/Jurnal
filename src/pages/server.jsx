import NavBar from "../components/Navbar";
import PostList from "../components/PostList";
import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "blue"
  },
});

const Client = () => {
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

export default Client;
