import Head from "next/head";
import { makeStyles, Box, Paper } from "@material-ui/core";
import RegForm from "../components/regform";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 75,
  },
  paper: {
    backgroundColor: "white",
  },
}));

export default function Signup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Softball Registration</title>
      </Head>
      <Box m={3} pt={0}>
        <Paper className={classes.paper} color="#fff">
          <RegForm />
        </Paper>
      </Box>
    </div>
  );
}
