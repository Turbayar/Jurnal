import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

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

function Post({data}) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [open2, setOpener] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpener(true);
  const handleClose2 = () => setOpener(false);

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

        {location.pathname === "/" 
        ? (
          <></>
        ) 
        : (
          <CardActions>
            <div>
              <Button onClick={handleOpen}>View</Button>
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
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div>
              <Button size="small" onClick={handleOpen2}>
                Edit
              </Button>
              <Modal
                open={open2}
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
                  >
                    Haha
                  </Typography>
                  <Typography id="modal-modal-description">hh</Typography>
                </Box>
              </Modal>
            </div>
          </CardActions>
        )}
      </Card>
    </Box>
  );
}

export default Post;
