import React from "react";

export const ThemeContext = React.createContext(
  {} as { theme: string; setTheme: any }
);
