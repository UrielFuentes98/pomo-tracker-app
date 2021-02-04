import { useState } from "react";

function ControlButtons({ updateState, sessionState }) {
  const [controlText, setControlText] = useState("Stop");

  // Change state of control button
  const setControlState = (newState) => {
    if (sessionState !== "wait") {
      setControlText(newState);
      if (newState === "Continue") {
        updateState("stop");
      } else {
        updateState("continue");
      }
    }
  };

  return (
    <div id="control-btns">
      <button
        className="control-btn"
        id="start-btn"
        onClick={() => updateState("run")}
      >
        Start
      </button>
      <button
        className="control-btn"
        id="control-btn"
        onClick={() =>
          controlText === "Stop"
            ? setControlState("Continue")
            : setControlState("Stop")
        }
      >
        {controlText}
      </button>
      <button
        className="control-btn"
        id="end-btn"
        onClick={() => updateState("wait")}
      >
        End
      </button>
    </div>
  );
}

export default ControlButtons;
