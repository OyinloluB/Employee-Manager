import React from "react";
import { makeStyles } from "@material-ui/core";
import { Paper, Grid } from "@material-ui/core";
import "./forms.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundColor: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: "0px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FormContainer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} id="paper"></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
