import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";

export default function Thanks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Softball Registration</title>
      </Head>
      <Typography variant="h3">Thank You!</Typography>
    </div>
  );
}
