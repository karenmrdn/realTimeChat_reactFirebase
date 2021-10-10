import React from "react";
import { AppBar, Button, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import { isLoggedIn } from "../utils/constants";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {isLoggedIn ? (
              <Button variant="outlined" color="inherit">
                Logout
              </Button>
            ) : (
              <Link
                to={LOGIN_ROUTE}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
