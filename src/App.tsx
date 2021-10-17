import React, { useState} from "react";
import "./App.scss";
import Navvar from "./screens/Navbar";
import ImprovisedRouter from "./screens/ImprovisedRouter";
import AppContext from "./AppContext"

export interface IState {
  selectedScreen: number,
  acceptedConditions: boolean
  usuario: string,
  password1: string,
  password2: string,
  pista: string,
  status: number,
}

export interface IContext {
    mainState: IState,
    setValue: (key: string, value: string | number | boolean) => void,
}

export interface IResponse {
  data: {
    status: number,
    message: string
  }
}



function App() {
  const [mainState, setMainState] = useState<IState>({
    selectedScreen: 0,
    acceptedConditions: false, 
    usuario: "",
    password1: "",
    password2: "",
    pista: "",
    status: 0,
  });
  
  const setValue = (key: string, value: string | number | boolean) => {
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
