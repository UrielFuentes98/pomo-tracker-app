import Timer from "./MainApp/Timer";
import ControlButtons from "./MainApp/ControlButtons";
import TextInputs from "./MainApp/TextInputs";
import { useState } from "react";

function MianApp() {
  const [nextMinutes, setNextMinutes] = useState(25);
  const [mode, setMode] = useState("pomodoro");
  const [resetTimer, setResetTimer] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionState, setSessionState] = useState("wait");

  // Update session mode and next initial time.

  const changeMode = (newMode, newMinutes) => {
    setNextMinutes(parseInt(newMinutes));
    setMode(newMode);
  };

  // Change sessionState according to new state

  const changeTimerState = (newState) => {
    console.log("🚀 ~ newState", newState);
    switch (newState) {
      case "run":
        if (sessionState === "wait") {
          setResetTimer(true);
          setIsTimerRunning(true);
          setSessionState(newState);
        }
        break;
      case "continue":
        if (sessionState === "stop") {
          setIsTimerRunning(true);
          setSessionState(newState);
        }
        break;
      case "stop":
        if (sessionState === "run") {
          setIsTimerRunning(false);
          setSessionState(newState);
        }
        break;
      case "wait":
        setIsTimerRunning(false);
        setResetTimer(true);
        setSessionState(newState);
        break;
      default:
    }
  };

  const timerReseted = () => {
    setResetTimer(false);
  };

  return (
    <div id="main-section">
      <Timer
        isRunning={isTimerRunning}
        resetTimer={resetTimer}
        resetValue={nextMinutes}
        resetedFunc={timerReseted}
      />
      <ControlButtons
        updateState={changeTimerState}
        sessionState={sessionState}
      />
      <TextInputs changeMode={changeMode} />
    </div>
  );
}

export default MianApp;
