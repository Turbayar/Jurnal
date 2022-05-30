import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { doc, updateDoc,deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #ced4da",
  boxShadow: 24,
  p: 4,
};

function PostAdmin({data, user}) {
  const location = useLocation();
  const Accept = async () => {
    const postRef = doc(db, "posts", data.id);
    await updateDoc(postRef, {
      status: true,
    });
    // window.location.reload(false)
  }

  const Deny = async () => {
    await deleteDoc(doc(db, "posts", data.id));
    window.location.reload(false)
  }

  return (
    <Box
      sx={{
        width: "80%",
        height: 170,
        marginTop: "10px",
        margin: " 10px auto",
      }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.header || ""}
          </Typography>
          <Typography>
            {data.article || ""}
          </Typography>
        </CardContent>

          <CardActions>
            <div>
              <Button variant="contained" color="success" onClick={Accept}>Accept</Button>
            </div>
            <div>
              <Button variant="contained" color='error' size="small" onClick={Deny}>
                Deny
              </Button>
             
            </div>
          </CardActions>
        
      </Card>
    </Box>
  );
}

export default PostAdmin;
