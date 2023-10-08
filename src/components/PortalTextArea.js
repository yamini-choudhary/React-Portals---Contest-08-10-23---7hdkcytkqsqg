import React, { useState } from "react";
import ReactDOM from "react-dom";

const PortalTextArea = () => {
  const [text, setText] = useState("");

  const handlePortalInput = (value) => {
    setText(value);
  };

  return ReactDOM.createPortal(
    <div>
      <textarea id="textarea" value={text} readOnly></textarea>
    </div>,
    document.getElementById("portal-textarea"),
  );
};

export default PortalTextArea;
