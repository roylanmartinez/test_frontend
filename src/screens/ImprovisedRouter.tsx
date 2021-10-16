import React, { useContext, useEffect, FC } from "react";
import Initial from "./Initial";
import UserCreation from "./UserCreation";
// import FeedBack from "./FeedBack";
import AppContext from "../AppContext";


function ImprovisedRouter() {
  const { mainState } = useContext(AppContext);
  if (mainState.selectedScreen === 0) return <Initial/>
  if (mainState.selectedScreen === 1) return <UserCreation/>
  // if (mainState.selectedScreen === 0) return <Initial/>
  return null
}

export default ImprovisedRouter;
