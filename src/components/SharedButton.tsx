import React from "react";

interface IProps{ 
  isAllowed: boolean,
  isLoading?: boolean,
  onClick: ()=>void,
}

const SharedButton = ({ isAllowed, onClick, isLoading }: IProps) =>{

  return (
    <button
    className={"sharedButton " + (isAllowed ? "allowed" : "notAllowed")}
    onClick={onClick}
    >
      {isLoading && <img src={require("../assets/img/loading.png")} alt="imgButton" className="sharedImageButton"></img> }
      Siguiente
    </button>
  );
}

export default SharedButton;
