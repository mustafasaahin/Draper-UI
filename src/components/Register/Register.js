import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import MuiPhoneNumber from "material-ui-phone-number";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./Register.module.css";
const theme = createTheme();

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [company_name, setCompany_Name] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [personal_identity_no, setPersonal_identity_no] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("Username"),
      password: data.get("password"),
    });
  };
  */
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  function saveData() {
    let data = {
      name,
      surname,
      company_name,
      mail,
      phone,
      personal_identity_no,
      gender,
      password,
    };
    console.warn(data);
    fetch("http://192.168.68.124:8014/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      console.warn("resp", resp);
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className={classes.registerBox}
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
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoFocus
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Surname"
                  name="surname"
                  autoComplete="family-name"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                  value={company_name}
                  onChange={(e) => {
                    setCompany_Name(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  required
                  fullWidth
                  variant="outlined"
                  defaultCountry={"tr"}
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                  value={phone}
                  onChange={setPhone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="identityNo"
                  label="Personal Identity Number"
                  name="identityNo"
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                  value={personal_identity_no}
                  onChange={(e) => {
                    setPersonal_identity_no(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} className={classes.radioLabel}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="error" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="error" />}
                      label="Male"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  color="primary"
                  style={{ background: "#E6E8EF" }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={saveData}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" color="#fff">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;
