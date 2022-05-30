import { Link } from "react-router-dom";
import MenuListComposition from "../components/SidebarMenu";

import {
  AppBar,
  TextField,
  Button,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useState } from "react";

export default function NavBar({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <MenuListComposition />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Journal
          </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>

          <Link
            style={{
              background: "white",
              color: "#0077b6",
              padding: "10px",
              borderRadius: "10px",
            }}
            to={Object.keys(user).length !== 0 ? "/addStudent" : "/login"}
          >
            Add Student
            <RateReviewIcon sx={{ marginLeft: 0.5 }} />
          </Link>
        </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
