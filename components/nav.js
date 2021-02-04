import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },
}));

export default function NavGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Link href="/signup">
            <Button variant="outlined">Sign Up</Button>
          </Link>
          <Link href="https://rockwoodsoftball.itemorder.com/sale?fbclid=IwAR27es-gZkpq6xibrp6TDdNd3EHKJMj0pVzuSctGJYEva7QXzg0KsL-XgoA">
            <Button variant="outlined">Merch</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
