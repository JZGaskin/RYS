import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#790d00",
    },
    secondary: {
      main: "#212121",
    },
    background: {
      default: "#790d00",
    },
  },
});

export default theme;
