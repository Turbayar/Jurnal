import { useState } from "react";

import EditData from "./EditData";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "background.paper",
//   border: "2px solid #ced4da",
//   boxShadow: 24,
//   p: 4,
// };

function Post({ data }) {
  const [userData, setUserData] = useState("");

  const handleClose = () => {
    setUserData("");
  };
  const handleOpen = () => {
    setUserData(data);
  };
  return (
    <>
      <Box
        sx={
          {
            width: "80%",
            height: 150,
            marginTop: "10px",
            margin: " 10px auto",
          }
        }
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
          </CardContent>
        </Card>
      </Box>
      {userData && <EditData data={userData} handleClose={handleClose} />}
    </>
  );
}

export default Post;
