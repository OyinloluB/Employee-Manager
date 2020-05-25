import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FormContainer from "./FormContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
    text: {
      textAlign: "center",
    },
  },
}));

export default function Signin({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorExists, setErrorExists] = useState(false);

  const { email, password } = credentials;

  const classes = useStyles();

  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password.length < 7) {
      setErrorExists(true);
    } else {
      setErrorExists(false);
      setIsAuthenticated(true);
      history.push("/dashboard");
    }
  };

  return (
    <FormContainer>
      {errorExists ? (
        <p
          style={{
            border: "1px solid red",
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px 5px 10px",
            width: "40ch",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Invalid credentials
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => setErrorExists(false)}
          >
            x
          </span>
        </p>
      ) : null}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button
          variant="outlined"
          type="submit"
          style={{
            border: "1px solid #52F1EC",
            color: "#52F1EC",
            width: "40ch",
            marginTop: "5vh",
          }}
        >
          Sign In
        </Button>
      </form>
    </FormContainer>
  );
}
