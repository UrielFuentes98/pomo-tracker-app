import React from "react";
import ControlInput from "./ControlInput";
import { useState, useEffect } from "react";

function TextInputs({
  changeMode,
  mode,
  setNextTimer,
  setResetTimer,
  checkTextInput,
  setCheckTextInput,
}) {
  const [pomodoroText, setPomodoroText] = useState("25");
  const [breakText, setBreakText] = useState("5");
  const [longBreakText, setLongBreakText] = useState("15");
  const [radioValues, setRadioValues] = useState({
    pomodoro: true,
    break: false,
    longBreak: false,
  });
  const [invalidPomoInput, setInvalidPomoInput] = useState(false);
  const [invalidBreakInput, setInvalidBreakInput] = useState(false);
  const [invalidLongInput, setInvalidLongInput] = useState(false);

  useEffect(() => {
    //If mode is updated by program change radio input selected.
    switch (mode) {
      case "pomodoro":
        setRadioValues({ pomodoro: true, break: false, longBreak: false });
        if (invalidPomoInput) {
          setNextTimer(25);
        } else {
          setNextTimer(parseInt(pomodoroText));
        }
        break;
      case "break":
        setRadioValues({ pomodoro: false, break: true, longBreak: false });
        if (invalidBreakInput) {
          setNextTimer(5);
        } else {
          setNextTimer(parseInt(breakText));
        }
        break;
      case "long-break":
        setRadioValues({ pomodoro: false, break: false, longBreak: true });
        if (invalidLongInput) {
          setNextTimer(15);
        } else {
          setNextTimer(parseInt(longBreakText));
        }
        break;
      default:
    }
    setCheckTextInput(false);
    if (checkTextInput) {
      setResetTimer(true);
    }
    // eslint-disable-next-line
  }, [mode, checkTextInput]);

  return (
    <div className="mt-5">
      <ControlInput
        changeMode={changeMode}
        radioName="pomodoro"
        inputName="Pomodoro"
        inputValue={pomodoroText}
        setInputValue={setPomodoroText}
        inputChecked={radioValues.pomodoro}
        invalidInput={invalidPomoInput}
        setInvalidInput={setInvalidPomoInput}
      />
      <ControlInput
        changeMode={changeMode}
        radioName="break"
        inputName="Break"
        inputValue={breakText}
        setInputValue={setBreakText}
        inputChecked={radioValues.break}
        invalidInput={invalidBreakInput}
        setInvalidInput={setInvalidBreakInput}
      />
      <ControlInput
        changeMode={changeMode}
        radioName="long-break"
        inputName="Long Break"
        inputValue={longBreakText}
        setInputValue={setLongBreakText}
        inputChecked={radioValues.longBreak}
        invalidInput={invalidLongInput}
        setInvalidInput={setInvalidLongInput}
      />
    </div>
  );
}

export default TextInputs;
