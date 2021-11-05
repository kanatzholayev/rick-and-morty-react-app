import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./Header.scss";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography variant="h6">Rick and Morty</Typography>
        <div>
          <Link className="nav-link" to="/">
            <Button color="inherit">Characters</Button>
          </Link>
          <Link className="nav-link" to="/episode">
            <Button color="inherit">Episode</Button>
          </Link>
          <Link className="nav-link" to="/location">
            <Button color="inherit">Location</Button>
          </Link>
          <Link className="nav-link" to="/watchlist">
            <Button color="inherit">My Watch List</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
