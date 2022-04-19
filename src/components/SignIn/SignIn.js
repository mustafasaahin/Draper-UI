import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./SignIn.module.css";
import axios from "axios";

const theme = createTheme();

const SignIn = (props) => {
  const [mail, setMail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(mail.includes("@") && password.trim().length > 6);
  }, [mail, password]);

  const emailChangeHandler = (event) => {
    setMail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(mail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(mail, password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      mail,
      password,
    };
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className={classes.signInBox}
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#5656564f",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5" color="common.white">
            Sign in
          </Typography>
          <Box
            component="form"
            //onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className={` ${emailIsValid === false ? classes.invalid : ""}`}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="username"
              autoComplete="username"
              autoFocus
              color="primary"
              style={{ background: "#E6E8EF" }}
              value={mail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <TextField
              className={` ${passwordIsValid === false ? classes.invalid : ""}`}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="primary"
              style={{ background: "#E6E8EF" }}
              value={password}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formIsValid}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  color="#fff"
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" color="#fff" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
