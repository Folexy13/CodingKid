import React from "react";
import { Loader } from "./Components";
import GlobalStyles from "./Styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      {/* <div className="App">In development...</div> */}
      <Loader />
    </>
  );
};

export default App;
