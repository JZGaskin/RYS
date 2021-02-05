import Image from "next/image";
import NavGrid from "./nav";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 75,
  },
  background: {
    zIndex: -1,
  },
  navgrid: {
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    top: 0,
    left: 0,
  },
}));

export default function Background() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.background}>
        <NavGrid className={classes.navgrid} />
        <Image
          alt="Pitcher"
          src="/SydPitch.jpg"
          layout="responsive"
          width={100}
          height={100}
          quality={25}
          priority={true} //true
        />
      </div>
    </div>
  );
}
