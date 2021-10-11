import React, { useState } from "react";

function Navbar(props) {
  const [state, setState] = useState({
    selections: ["selected ", "", ""],
    done: ["", "", ""],
  });

  const setValue = (key, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const handleClick = (value) => {
    const selections = ["", "", ""].map((_, index) =>
      index === value ? "selected " : ""
    );
    const done = ["", "", ""].map((_, index) => (index < value ? "done " : ""));
    setValue("selections", selections);
    setValue("done", done);
  };

  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarMiddleContainer">
          <div className="largeLine"></div>
          <div
            onClick={() => {
              handleClick(0);
            }}
            className={
              "navbarVerticalContainer " + state.selections[0] + state.done[0]
            }
          >
            <div className="navbarBall">
              {state.done[0] === "done " ? (
                <img
                  className="image"
                  src={require("../assets/img/checked.png")}
                  alt="asd"
                ></img>
              ) : (
                <h1 className="number">1</h1>
              )}
            </div>
            <div className="navbarTriangle"></div>
          </div>
          <div
            onClick={() => {
              handleClick(1);
            }}
            className={
              "navbarVerticalContainer " + state.selections[1] + state.done[1]
            }
          >
            <div className="line center"></div>

            <div className="navbarBall">
              {state.done[1] === "done " ? (
                <img
                  className="image"
                  src={require("../assets/img/checked.png")}
                  alt="asd"
                ></img>
              ) : (
                <h1 className="number">2</h1>
              )}
            </div>
            <div className="navbarTriangle"></div>
          </div>
          <div
            onClick={() => {
              handleClick(2);
            }}
            className={
              "navbarVerticalContainer " + state.selections[2] + state.done[2]
            }
          >
            <div className="line right"></div>
            <div className="navbarBall">
              {state.done[2] === "done " ? (
                <img
                  className="image"
                  src={require("../assets/img/checked.png")}
                  alt="asd"
                ></img>
              ) : (
                <h1 className="number">3</h1>
              )}
            </div>
            <div className="navbarTriangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
