import React from "react";
import UI from "./components/UI";
import Navbar from "./components/Navbar";
import GlobalProvider from "./context/GlobalData";

const App = () => {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <UI />
      </div>
    </GlobalProvider>
  );
};

export default App;
