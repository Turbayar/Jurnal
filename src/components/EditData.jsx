import { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

function EditData({ data, handleClose }) {
  const [userData, setUserData] = useState({
    post: data.class,
    firstName: data.name,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
  });

  const { post, firstName, lastName, phoneNumber } = userData;

  return (
    <Dialog open={data !== ""} onClose={handleClose}>
      <DialogTitle> Edit student info </DialogTitle>
      <DialogContent>
        <TextField
          value={firstName}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, firstName: e.target.value }));
          }}
          label="First name"
          required
          fullWidth
          margin="dense"
        />
        <TextField
          value={lastName}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, lastName: e.target.value }));
          }}
          label="Latname"
          margin="dense"
          fullWidth
        />
        <TextField
          label="class"
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, post: e.target.value }));
          }}
          value={post}
          margin="dense"
          multiline
          fullWidth
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
          fullWidth
          maxRows={50}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Save</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditData;
