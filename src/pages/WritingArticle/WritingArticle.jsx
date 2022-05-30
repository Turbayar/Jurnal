import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WritingArticle.css";
import { db } from "../../firebase";
import {
  doc,
  collection,
  setDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  Box,
  Input,
  Card,
  Modal,
  Typography,
  TextField,
  Button,
} from "@mui/material";


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

export default function WritingArticle() {
  const [userData, setUserData] = useState({
    post: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const { post, firstName, lastName, phoneNumber } = userData;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickPost = async () => {
    if (post.length !== 0 && firstName !== 0) {
      const docRef = await addDoc(collection(db, "students"), {
        class: post,
        lastName: lastName,
        firstName: firstName,
        phoneNumber: phoneNumber,
      });

      alert("Succefully sent");
      handleClose();
    } else {
      alert("Please fill");
    }
  };
  return (
    <div className="box">
      <div className="writing">
        <Card
          color="primary"
          sx={{
            padding: "30px",
            width: "70%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/">
              <Button variant="outlined" sizeSmall sx={{ width: "0.1%" }}>
                x
              </Button>
            </Link>
          </Box>
          <TextField
            value={firstName}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, firstName: e.target.value }));
            }}
            label="First name"
            required
            margin="dense"
          />
          <TextField
            value={lastName}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, lastName: e.target.value }));
            }}
            label="Latname"
            margin="dense"
          />
          <TextField
            label="class"
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, post: e.target.value }));
            }}
            value={post}
            margin="dense"
            multiline
            maxRows={50}
          />
          <TextField
            label="phone-number"
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, phoneNumber: e.target.value }));
            }}
            value={phoneNumber}
            margin="dense"
            multiline
            maxRows={50}
          />
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ margin: "20px auto", width: "70%" }}
          >
            Save
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                gutterBottom
                variant="h5"
                component="h2"
              ></Typography>
              <Typography id="modal-modal-description">
                Are you sure to post?
              </Typography>
              <Button onClick={onClickPost}> Yes </Button>

              <Button
                onClick={handleClose}
                variant="outlined"
                sizeSmall
                sx={{ width: "0.1%" }}
              >
                No
              </Button>
            </Box>
          </Modal>
        </Card>
      </div>
    </div>
  );
}
