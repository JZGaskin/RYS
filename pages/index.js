import Head from "next/head";
import { makeStyles } from "@material-ui/core";
import Background from "../components/background";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 75,
  },
  background: {
    zIndex: -1,
  },
  navgrid: {
    zIndex: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Home</title>
      </Head>
      <Background className={classes.background} />
    </div>
  );
}
