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
}

export interface IContext {
    mainState: IState,
    setValue: (key: string, value: string | number | boolean) => void,
}



function App() {
  const [mainState, setMainState] = useState<IState>({
    selectedScreen: 2,
    acceptedConditions: true, 
    usuario: "",
    password1: "",
    password2: "",
    pista: "",
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

  // useEffect(() => {
  //   console.log(mainState.selectedScreen)
  // }, [mainState.selectedScreen]);

  return (
   
  <AppContext.Provider value={context}>
      <Navvar></Navvar> 
      <ImprovisedRouter></ImprovisedRouter>
    </AppContext.Provider> 
  );
}

export default App;
