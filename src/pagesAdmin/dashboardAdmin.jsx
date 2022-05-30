
import React from "react";
import NavBarAdmin from "../componentsAdmin/NavbarAdmin";
import PostListAdmin from "../componentsAdmin/PostListAdmin";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const DashboardAdmin = ({user}) => {
  return (
    <div >
      <CssBaseline />
      <NavBarAdmin user={user}/>

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
        <PostListAdmin user = {user}/>
      </main>

     
    </div>
  );
};

export default DashboardAdmin;
