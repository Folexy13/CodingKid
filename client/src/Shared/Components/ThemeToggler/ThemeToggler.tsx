import React from "react";
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { APPCONFIG } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <DarkModeSwitch
        // style={{ marginBottom: "2rem" }}
        checked={theme === "light"}
        onChange={handleThemeToggle}
        size={20}
        moonColor={APPCONFIG.lightColor}
        sunColor={APPCONFIG.darkColor}
      />
      {theme === "light" ? (
        <p style={{ cursor: "pointer" }} onClick={handleThemeToggle}>
          Dark Mode
        </p>
      ) : (
        <p style={{ cursor: "pointer" }} onClick={handleThemeToggle}>
          Light Mode
        </p>
      )}
    </div>
  );
};

export default ThemeToggle;
