import React, { useContext } from "react";
import "./App.css";

import { ThemeContext } from "./ThemeProvider";
import Intervals from "./components/Intervals";

function App() {
  const value = useContext(ThemeContext);
  const [bgTheme] = value;

  return (
    <div className={`App ${bgTheme}`}>
      <Intervals />
    </div>
  );
}

export default App;
