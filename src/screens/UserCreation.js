import React from "react";
import SharedInput from "../components/SharedInput";

function UserCreation(props) {
  return (
    <div className="body">
      <div className="titleContainer">
        <h1 className="title">Test Frontend Wheel Hub</h1>
      </div>
      <SharedInput
        neededHelp={true}
        isItPassword={true}
        value={"asdfasdfkj"}
        notValid={true}
        maximum={24}
      />
    </div>
  );
}

export default UserCreation;
