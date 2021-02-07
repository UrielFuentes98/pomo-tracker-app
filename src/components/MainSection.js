import Timer from "./MainApp/Timer";
import ControlButtons from "./MainApp/ControlButtons";
import TextInputs from "./MainApp/TextInputs";
import { useState } from "react";

function MianApp() {
  const [nextMinutes, setNextMinutes] = useState(25);
  const [mode, setMode] = useState("pomodoro");
  const [resetTimer, setResetTimer] = useState(true);
  const [checkTextInput, setCheckTextInput] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionState, setSessionState] = useState("wait");
  const [sessionOver, setSessionOver] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [resetContinue, setResetContinue] = useState(false);

  // Update session mode and next initial time.

  const changeMode = (newMode) => {
    if (sessionState === "wait") {
      // setNextMinutes(parseInt(newMinutes));
      setMode(newMode);
    }
  };

  // Change sessionState according to new state

  const changeTimerState = (newState) => {
    switch (newState) {
      case "run":
        if (sessionState === "wait") {
          setCheckTextInput(true);
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
        if (sessionState === "run" || sessionState === "continue") {
          setIsTimerRunning(false);
          setSessionState(newState);
        }
        break;
      case "wait":
        setIsTimerRunning(false);
        if (sessionState === "stop") {
          setResetContinue(true);
        }
        setSessionState(newState);
        if (sessionOver || mode !== "pomodoro") {
          checkNextForSession();
        } /* else {
          setCheckTextInput(true);
        } */
        setCheckTextInput(true);
        break;
      default:
    }
  };

  //Calculating next session according to pomodoro standard
  //and present session
  const checkNextForSession = () => {
    if (mode === "pomodoro") {
      if (cycles < 3) {
        setMode("break");
        setCycles((cycles) => cycles + 1);
      } else {
        setMode("long-break");
        setCycles(0);
      }
    } else {
      setMode("pomodoro");
    }
    setSessionOver(false);
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
        sessionOver={sessionOver}
        setSessionOver={setSessionOver}
      />
      <ControlButtons
        updateState={changeTimerState}
        sessionState={sessionState}
        resetContinue={resetContinue}
        setResetContinue={setResetContinue}
      />
      <TextInputs
        changeMode={changeMode}
        mode={mode}
        setNextTimer={setNextMinutes}
        setResetTimer={setResetTimer}
        checkTextInput={checkTextInput}
        setCheckTextInput={setCheckTextInput}
      />
    </div>
  );
}

export default MianApp;
