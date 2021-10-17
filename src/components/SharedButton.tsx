import React from "react";

interface IProps{ 
  isAllowed: boolean,
  isLoading?: boolean,
  isTransparent?: boolean,
  isBold?: boolean,
  label: string,
  onClick: ()=>void,
}

const SharedButton = ({ isAllowed, onClick, isLoading, isTransparent, isBold, label }: IProps) =>{

  return (
    <button
    className={["sharedButton", (isAllowed ? "allowed" : "notAllowed"), (isTransparent && "transparent"), (isBold && "bold")].join(" ")}
    onClick={onClick}
    >
      {isLoading && <img src={require("../assets/img/loading.png")} alt="imgButton" className="sharedImageButton"></img> }
      {label}
    </button>
  );
}

export default SharedButton;
