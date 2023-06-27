import React, { useState,Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeContext } from "./Shared/Context/ThemeContext";
import GlobalStyles from "./Shared/Styles/global";
import { Routes } from "./Routes";
import { Loader } from "./Shared/Components";
const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<Loader/>}>
          <Switch>
            {Routes.map((route:any, index:number) => (
              <Route
                key={index}
                path={route.path}
                exact
                render={(props:any) => <route.component {...props} />}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
