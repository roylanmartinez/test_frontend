import React, { useContext } from "react";
import Initial from "./Initial";
import UserCreation from "./UserCreation";
import FeedBack from "./FeedBack";
import AppContext from "../AppContext";

function Body(props) {
  const { mainState } = useContext(AppContext);
  const selectedOne = () => mainState.navbar.selections.indexOf("selected ");
  if (selectedOne() === 0) {
    return <Initial></Initial>;
  } else if (selectedOne() === 1) {
    return <UserCreation></UserCreation>;
  } else if (selectedOne() === 2) {
    return <FeedBack></FeedBack>;
  }
}

export default Body;
