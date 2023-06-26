import React, { useState } from "react";
import { Home } from "./Layout";
import { Header, Section } from "./Shared/Components";
import { ThemeContext } from "./Shared/Context/ThemeContext";
import GlobalStyles from "./Shared/Styles/global";
const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles />
      <Home />
    </ThemeContext.Provider>
  );
};

export default App;
