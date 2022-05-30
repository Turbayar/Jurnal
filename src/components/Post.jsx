import { useState } from "react";

import EditData from "./EditData";
import DeleteData from "./DeleteData";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";

function Post({ data }) {
  const [userData, setUserData] = useState("");

  const handleClose = () => {
    setUserData("");
  };
  const handleOpen = () => {
    setUserData(data);
  };
  const [open2, setOpener] = useState(false);
  const handleOpen2 = () => setOpener(true);
  const handleClose2 = () => setOpener(false);
  return (
    <>
      <Box
        sx={{
          width: "80%",
          height: 150,
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
              {data.name || ""} {data.lastName || ""}
            </Typography>
            <Typography>Class : {data.class || ""}</Typography>
            <Typography>Phone: {data.phoneNumber || ""}</Typography>
            <Button variant="contained" onClick={handleOpen}>
              EDIT
            </Button>
            <Button variant="outlined" onClick={handleOpen2}>
              Delete
            </Button>
          </CardContent>
        </Card>
      </Box>
      {userData && <EditData data={userData} handleClose={handleClose} />}
      <DeleteData open2={open2} handleClose2={handleClose2} />
    </>
  );
}

export default Post;
