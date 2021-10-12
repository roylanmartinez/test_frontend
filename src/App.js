import React, { useState } from "react";
import "./App.scss";
import AppContext from "./AppContext";
import Navvar from "./screens/Navbar";
import Body from "./screens/Body";

function App() {
  const [mainState, setMainState] = useState({
    navbar: {
      progress: "0",
      selections: ["selected ", "", ""],
      done: ["", "", ""],
    },
    initial: {
      accepted: false,
    },
  });

  const setValue = (screen, key, value) => {
    setMainState((prevState) => {
      return {
        ...prevState,
        [screen]: { ...prevState[screen], [key]: value },
      };
    });
  };

  const context = {
    mainState,
    setMainState,
    setValue,
  };

  return (
    <AppContext.Provider value={context}>
      <Navvar></Navvar>
      <Body></Body>
    </AppContext.Provider>
  );
}

export default App;
