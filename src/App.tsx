import React, { useState, FC } from "react";
import "./App.scss";
import Navvar from "./screens/Navbar";
import ImprovisedRouter from "./screens/ImprovisedRouter";
import AppContext from "./AppContext"
import { type } from "os";

export interface IState {
  selectedScreen: number,
  acceptedConditions: boolean
}

export interface IContext {
    mainState: IState,
    setValue: (key: string, value: number | boolean) => void,
}



function App() {
  const [mainState, setMainState] = useState<IState>({
    selectedScreen: 0,
    acceptedConditions: true, 
  });
  
  const setValue = (key: string, value: number | boolean) => {
    setMainState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const context = {
    mainState,
    setValue,
  };

  return (
   
  <AppContext.Provider value={context}>
      <Navvar></Navvar> 
      <ImprovisedRouter></ImprovisedRouter>
    </AppContext.Provider> 
  );
}

export default App;
