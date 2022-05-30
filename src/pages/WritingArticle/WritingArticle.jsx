import React, { useState } from "react";
import "./WritingArticle.css";
import { db } from "../../firebase";
import {
  doc,
  collection,
  setDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

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
  const [post, setPost] = useState("");
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickPost = async () => {
    if (post.length !== 0 && header.length !== 0) {
      const docRef = await addDoc(collection(db, "posts"), {
        article: post,
        description: description,
        header: header,
        status: false,
      });
      setPost("");
      setHeader("");
      setDescription("");

      alert("Succefully sent");
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
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            label="header"
            required
            margin="dense"
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="description"
            margin="dense"
          />
          <TextField
            label="article"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            margin="dense"
            multiline
            maxRows={50}
          />
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{ margin: "20px auto", width: "70%" }}
          >
            Post
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
              
                <Button onClick={handleClose} variant="outlined" sizeSmall sx={{ width: "0.1%" }}>
                  noo
                </Button>
              
            </Box>
          </Modal>
        </Card>
      </div>
    </div>
  );
}
