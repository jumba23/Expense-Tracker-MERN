import { Button } from "@mui/material";
import "./App.css";
import { useThemeContext } from "./state/ThemeContext";

const App = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  console.log("darkMode", darkMode);

  return (
    <div className="app">
      <h1>Expense Tracker App</h1>
      <Button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    </div>
  );
};

export default App;
