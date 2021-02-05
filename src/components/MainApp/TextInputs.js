import React from "react";
import ControlInput from "./ControlInput";
import { useState, useEffect } from "react";

function TextInputs({ changeMode, mode }) {
  const [pomodoroText, setPomodoroText] = useState("25");
  const [breakText, setBreakText] = useState("5");
  const [longBreakText, setLongBreakText] = useState("15");
  const [radioValues, setRadioValues] = useState({
    pomodoro: true,
    break: false,
    longBreak: false,
  });

  useEffect(() => {
    console.log("🚀 ~ mode", mode)

    switch (mode) {      
      case "pomodoro":
        setRadioValues({ pomodoro: true, break: false, longBreak: false });
        break;
      case "break":
        setRadioValues({ pomodoro: false, break: true, longBreak: false });
        break;
      case "long-break":
        setRadioValues({ pomodoro: false, break: false, longBreak: true });
        break;
      default:
    }
  }, [mode]);

  return (
    <div id="input-elements">
      <ControlInput
        changeMode={changeMode}
        radioName="pomodoro"
        inputName="Pomodoro"
        inputValue={pomodoroText}
        setInputValue={setPomodoroText}
        inputChecked={radioValues.pomodoro}
      />
      <ControlInput
        changeMode={changeMode}
        radioName="break"
        inputName="Break"
        inputValue={breakText}
        setInputValue={setBreakText}
        inputChecked={radioValues.break}
      />
      <ControlInput
        changeMode={changeMode}
        radioName="long-break"
        inputName="Long Break"
        inputValue={longBreakText}
        setInputValue={setLongBreakText}
        inputChecked={radioValues.longBreak}
      />
    </div>
  );
}

export default TextInputs;
