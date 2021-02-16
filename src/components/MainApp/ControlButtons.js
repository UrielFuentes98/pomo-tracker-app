import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// TO-DO Fix Stop/Continue Button

function ControlButtons({
  updateState,
  sessionState,
  resetContinue,
  setResetContinue,
}) {
  const [controlText, setControlText] = useState("Stop");

  useEffect(() => {
    if (resetContinue) {
      setControlText("Stop");
      setResetContinue(false);
    }
    // eslint-disable-next-line
  }, [resetContinue]);

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
    <div className="ml-3">
      <Button
        variant="secondary"
        className="mr-2"
        style={{ border: "1px solid black", boxShadow: "none" }}
        onClick={() => updateState("run")}
      >
        {" "}
        Start
      </Button>
      <Button
        variant="secondary"
        className="mr-2"
        style={{ border: "1px solid black", boxShadow: "none" }}
        onClick={() =>
          controlText === "Stop"
            ? setControlState("Continue")
            : setControlState("Stop")
        }
      >
        {controlText}
      </Button>
      <Button
        variant="secondary"
        className="mr-2"
        style={{ border: "1px solid black", boxShadow: "none" }}
        onClick={() => updateState("wait")}
      >
        End
      </Button>
    </div>
  );
}

export default ControlButtons;
