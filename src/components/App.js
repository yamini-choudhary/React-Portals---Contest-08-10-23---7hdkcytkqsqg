import React, { useState } from "react";
import "../styles/App.css";
import PortalButton from "./PortalButton.js";
import PortalTextArea from "./PortalTextArea.js";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    ReactDOM.createPortal(
      inputValue,
      document.getElementById("portal-textarea"),
    );
  };

  return (
    <div id="main">
      <input id="input" value={inputValue} onChange={handleInputChange}></input>
      <br />
      <PortalButton buttonClick={handleButtonClick} />
      <br />
      <PortalTextArea />
    </div>
  );
};

export default App;
