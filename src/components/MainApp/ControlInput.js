import React from "react";
import ControlButtons from "./ControlButtons";
import { useState } from "react";

function ControlInput({ radioName, inputName, inputValue }) {
  const [textTime, setTextTime] = useState(inputValue);

  return (
    <div className="control-input">
      <input
        type="radio"
        id={radioName}
        name="session-type"
        value={radioName}
      ></input>
      <label className="input-label">{inputName}</label>
      <input
        className="input-field"
        type="text"
        value={textTime}
        onChange={(e) => setTextTime(e.target.value)}
        size="5"
      />
      <span> min</span>
    </div>
  );
}

export default ControlInput;
