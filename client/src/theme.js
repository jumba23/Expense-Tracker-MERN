import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff", // set the primary color to white
    },
    secondary: {
      // set secondary color to yellow
      main: "#fdd835",
    },
    text: {
      primary: "#000000", // set text color to black
    },
    background: {
      default: "#ffffff", // set background color to white
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000", // set the primary color to black
    },
    secondary: {
      main: "#9e9e9e",
    },
    text: {
      primary: "#ffffff", // set text color to white
    },
    background: {
      default: "#000000", // set background color to black
    },
  },
});

export { lightTheme, darkTheme };
