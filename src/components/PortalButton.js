import React from "react";
import ReactDOM from "react-dom";

const PortalButton = ({ buttonClick }) => {
  return ReactDOM.createPortal(
    <div>
      <button id="button" onClick={buttonClick}>
        Click
      </button>
    </div>,
    document.getElementById("portal-button"),
  );
};

export default PortalButton;
