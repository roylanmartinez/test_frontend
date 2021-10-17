import React from "react";
import SharedButton from "../components/SharedButton";
function FeedBack() {
  return (
    <div className="body">
      <div className="feedbackContainer">
        <div  className="leftFeedBack">
          <img src={require("../assets/img/success.png")} alt="feedback"></img>
        </div>

        <div className="rightFeedBack">
          <h4>¡La cuenta se creó currectamente!</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        facilisis est id bibendum. Mauris rhoncus arcu elit, non iaculis ex
        congue nec. Sed in dui augue. Nam eget auctor diam. Aliquam augue augue,
        ultricie.</p>
        </div>
        
      </div>
      <div className="footer flexRowRight">
        <SharedButton
          label={"Atrás"}
          isTransparent={true}
          isBold={false}
          onClick={() => {
            // if (mainState.acceptedConditions) setValue("selectedScreen", 1);
          }}
          isAllowed={true}
        />
        <SharedButton
          label={"Volver al inicio"}
          isTransparent={true}
          isBold={true}
          onClick={()=>{

          }}
          isAllowed={true}
        />
      </div>
    </div>
  );
}

export default FeedBack;
