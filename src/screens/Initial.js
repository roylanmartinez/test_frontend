import React, { useContext } from "react";
import SharedButton from "../components/SharedButton";

import AppContext from "../AppContext";

function Initial(props) {
  const { mainState, setValue } = useContext(AppContext);
  return (
    <div className="body">
      <div className="titleContainer">
        <h1 className="title">Test Frontend Wheel Hub</h1>
      </div>
      <div className="flexRowCenter">
        <div className="centralImageContainer">
          <img
            className="centralImage"
            src={require("../assets/img/Logotipo-Vertical-Verde-Alta.png")}
            alt="Logotipo-Vertical-Verde-Alta.png"
          ></img>
        </div>
      </div>
      <h5 className="smallTitle">What will you do?</h5>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        facilisis est id bibendum. Mauris rhoncus arcu elit, non iaculis ex
        congue nec. Sed in dui augue. Nam eget auctor diam. Aliquam augue augue,
        ultricie
      </p>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        facilisis est id bibendum.
      </p>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flexRow">
        <div>
          <div
            className={
              "checkbox " + (mainState.initial.accepted ? "accepted" : "")
            }
            onClick={() =>
              setValue("initial", "accepted", !mainState.initial.accepted)
            }
          />
        </div>
        <div>
          <p className="checkboxText">
            Confirma ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus facilisis est id bibendum. asdfasd fasdf asdf asdf asdfa
            sdfsd fgsdfgsdfgsdfgsdfgasdfasdfsd fg sdfgsdfgsdfg sdfgsd fgs df
          </p>
        </div>
      </div>
      <div className="footer flexRowRight">
        <SharedButton
          onClick={() => {
            if (mainState.initial.accepted) {
              setValue("navbar", "selections", ["", "selected ", ""]);
            }
          }}
          isAllowed={mainState.initial.accepted}
        />
      </div>
    </div>
  );
}

export default Initial;
