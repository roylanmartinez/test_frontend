import React, { useState, useContext, FC, useEffect, createContext } from "react";
import AppContext from "../AppContext";
import UsePrevious from "../components/UsePrevious";

function Navbar() {
  const { mainState, setValue } = useContext(AppContext);
  const prevScreen = UsePrevious(mainState.selectedScreen)

  const handleClick = (newPageSelected: number) => {
    if ((newPageSelected > 0) && !mainState.acceptedConditions) {
      return;
    }
    setValue("selectedScreen", newPageSelected);
  };
  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarMiddleContainer">
          <div
            className={`largeLine above`}
          >
            <div className={`from${prevScreen}to${mainState.selectedScreen}`}><div/></div>
          </div>
          {[...Array(3)].map((_, index) => (
            <VerticalDiv
              key={index}
              selectedScreen={mainState.selectedScreen}
              onHandleClick={handleClick}
              index={index}
            ></VerticalDiv>
          ))}
        </div>
      </div>
    </div>
  );
}

interface IVerticalDiv {
  selectedScreen: number;
  onHandleClick: (newPageSelected: number)=>void
  index: number
}

const VerticalDiv: FC<IVerticalDiv> = ({selectedScreen, onHandleClick, index}) => {
  const isSelected = (selectedScreen === index && "selected");
  const isDone = ( index < selectedScreen && "done");

  return (
    <div
      onClick={() =>{
        onHandleClick(index);
      }}
      className={["navbarVerticalContainer", isSelected, isDone].join(" ")}
    >
      <div className="navbarBall">
        {isDone ? (
          <img
            className="image"
            src={require("../assets/img/checked.png")}
            alt="asd"
          ></img>
        ) : (
          <h1 className="number">{index + 1}</h1>
        )}
      </div>
      <div className="navbarTriangle"></div>
    </div>
  );
};

export default Navbar;
