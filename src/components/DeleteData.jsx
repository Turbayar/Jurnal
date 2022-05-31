import { useState } from "react";

import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Modal,
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

function DeleteData({ open2, data, handleClose2 }) {
  const onClickDelete = async () => {
    await deleteDoc(doc(db, "students", open2));
    handleClose2();
  };

  return (
    <Modal
      open={open2 !== ""}
      onClose={handleClose2}
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
          Are you sure to delete?
        </Typography>
        <Button onClick={onClickDelete}> Yes </Button>

        <Button
          onClick={handleClose2}
          variant="outlined"
          sizesmall="true"
          sx={{ width: "0.1%" }}
        >
          No
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteData;
