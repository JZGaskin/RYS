import Head from "next/head";
import { makeStyles, Box } from "@material-ui/core";
import RegForm from "../components/regform";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 75,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Softball Registration</title>
      </Head>
      <Box m={3} pt={0}>
        <RegForm />
      </Box>
    </div>
  );
}
