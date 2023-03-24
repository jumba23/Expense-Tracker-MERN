import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log("darkMode", darkMode);

  const theme = darkMode ? darkTheme : lightTheme;

  console.log("theme on click", theme);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
