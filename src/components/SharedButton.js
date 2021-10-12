import React from "react";

function SharedButton({ isAllowed, onClick }) {
  const baseAllowed = {
    outline: "none",
    backgroundColor: "#07542a",
    opacity: 0.7,
    fontWeight: "bold",
  };
  const baseNotAllowed = {
    outline: "none",
    backgroundColor: "#788f9c",
    opacity: 0.7,
  };
  const base = isAllowed ? baseAllowed : baseNotAllowed;

  return (
    <button
      onClick={onClick}
      style={{
        ...base,
        border: "none",
        width: "200px",
        height: "40px",
        color: "white",
        borderRadius: "10px",
      }}
    >
      Continue
    </button>
  );
}

export default SharedButton;
