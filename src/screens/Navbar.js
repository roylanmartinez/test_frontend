import React, { useContext } from "react";
import AppContext from "../AppContext";

function Navbar(props) {
  const { mainState, setValue } = useContext(AppContext);

  const movement = (newSelected) => {
    const oldPosition = mainState.navbar.selections.indexOf("selected ") * 33.3;
    const newPosition = newSelected * 33.3;
    const growHow = newPosition > oldPosition ? 1 : -1;

    if (newPosition === oldPosition) {
      return;
    }

    let position = oldPosition;

    const interval = setInterval(() => {
      position = position + 1 * growHow;
      setValue("navbar", "progress", `${position}`);

      if (Math.abs(position - newPosition) <= 0.5) {
        clearInterval(interval);
      }
    }, 5);
  };

  const handleClick = (newValue) => {
    if ((newValue === 1 || newValue === 2) && !mainState.initial.accepted) {
      return;
    }
    const selections = ["", "", ""].map((_, index) =>
      index === newValue ? "selected " : ""
    );
    const done = ["", "", ""].map((_, index) =>
      index < newValue ? "done " : ""
    );

    movement(newValue);
    setValue("navbar", "selections", selections);
    setValue("navbar", "done", done);
  };

  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarMiddleContainer">
          <div className="largeLine"></div>
          <div
            style={{ width: `${mainState.navbar.progress}%` }}
            className="largeLine above"
          ></div>

          {[...Array(3)].map((_, index) => (
            <VerticalDiv
              key={index}
              currentState={mainState.navbar}
              onHandleClick={handleClick}
              index={index}
            ></VerticalDiv>
          ))}
        </div>
      </div>
    </div>
  );
}

const VerticalDiv = ({ currentState, onHandleClick, index }) => {
  return (
    <div
      onClick={() => {
        onHandleClick(index);
      }}
      className={
        "navbarVerticalContainer " +
        currentState.selections[index] +
        currentState.done[index]
      }
    >
      <div className="navbarBall">
        {currentState.done[index] === "done " ? (
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
