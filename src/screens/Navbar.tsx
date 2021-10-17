import React, { useState, useContext, FC, useEffect } from "react";
import AppContext from "../AppContext";
import UsePrevious from "../components/UsePrevious";
interface IState {
  old: number | undefined,
  new: number
}
function Navbar() {
  const { mainState, setValue } = useContext(AppContext);
  const [screens, setScreens] = useState<IState>({old: undefined, new: 0})
  const prevScreen = UsePrevious(mainState.selectedScreen);
  const handleClick = (newPageSelected: number) => {
    if ((newPageSelected > 0) && !mainState.acceptedConditions || (newPageSelected === mainState.selectedScreen)) {
      return;
    }
    setValue("selectedScreen", newPageSelected);
  };

  useEffect(() => {
    setScreens({
      old: prevScreen,
      new: mainState.selectedScreen
    })
  }, [mainState.selectedScreen]);

  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarMiddleContainer">
          <div
            className={`largeLine`}
          >
            <div className={`from${screens.old}to${screens.new}`}><div/></div>
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
