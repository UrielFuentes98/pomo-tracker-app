import useInterval from "../useInterval";
import { useEffect } from "react";
import alarmFile from "../../assets/sounds/alarm_sound.mp3";

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
  setSeconds,
}) => {
  useInterval(updateTimer, isRunning ? 1000 : null);

  //Update page title with session name and time
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

  const alarmSound = new Audio(alarmFile);

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
        alarmSound.play();
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

  //Convert to string and add leading zero
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
