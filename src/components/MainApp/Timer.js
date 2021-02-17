import useInterval from "../useInterval";
import { useState, useEffect } from "react";

const Timer = ({
  isRunning,
  resetTimer,
  resetValue,
  resetedFunc,
  sessionOver,
  setSessionOver,
  mode,
  minutes,
  seconds,
  setMinutes,
  setSeconds
}) => {

  useInterval(updateTimer, isRunning ? 100 : null);

  useEffect(() => {
    let titleString = ``;
    if (!sessionOver) {
      switch (mode) {
        case "pomodoro":
          titleString += "Pomodoro - ";
          break;
        case "break":
          titleString += "Break - ";
          break;
        case "long-break":
          titleString += "Long Break - ";
          break;
        default:
      }
    } else {
      titleString += "Extra - ";
    }
    document.title =
      titleString + `${renderTime(minutes)}:${renderTime(seconds)}`;
    // eslint-disable-next-line
  }, [minutes, seconds, mode]);

  // If resetTimer flag set, reset timer and clear flag
  useEffect(() => {
    if (resetTimer) {
      setMinutes(resetValue);
      setSeconds(0);
      resetedFunc();
    }
    // eslint-disable-next-line
  }, [resetTimer]);

  // Update timer function for normal section and extra section.
  function updateTimer() {
    if (!sessionOver) {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes((minutes) => minutes - 1);
      } else {
        console.log("Setting extra state");
        setSessionOver(true);
      }
      //Update minutes and secods if session ended.
    } else {
      if (seconds < 59) {
        setSeconds(seconds + 1);
      } else if (minutes < 60) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }
  }

  const renderTime = (number) => {
    let numString = "";
    if (number < 10) {
      numString = "0" + number.toString();
    } else {
      numString = number.toString();
    }
    return numString;
  };

  return (
    <div className="display-2 font-weight-bold mb-2">
      {renderTime(minutes)}:{renderTime(seconds)}
    </div>
  );
};

export default Timer;
