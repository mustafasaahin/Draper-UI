import React from "react";
import Box from "@material-ui/core/Box";
import textileLogo from "../../img/textile-logo.png";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <a href="/">
        <img src={textileLogo} alt="textileLogo" className={classes.logo} />
      </a>

      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
