import Timer from "./MainApp/Timer";
import ControlButtons from "./MainApp/ControlButtons";
import TextInputs from "./MainApp/TextInputs";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clickFile from "../assets/sounds/click.mp3";

function MainApp({
  userState,
  minutes,
  seconds,
  setMinutes,
  setSeconds,
  stats,
  setStats,
}) {
  const [nextMinutes, setNextMinutes] = useState(25);
  const [mode, setMode] = useState("pomodoro");
  const [resetTimer, setResetTimer] = useState(true);
  const [checkTextInput, setCheckTextInput] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionState, setSessionState] = useState("wait");
  const [sessionOver, setSessionOver] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [resetContinue, setResetContinue] = useState(false);
  const [modeLabel, setModeLabel] = useState("Pomodoro");
  const clickSound = new Audio(clickFile);

  // Update session mode and next initial time.

  const changeMode = (newMode) => {
    if (sessionState === "wait") {
      setMode(newMode);
      defineModeLabel(newMode);
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
          clickSound.play();
        }
        break;
      case "continue":
        if (sessionState === "stop") {
          setIsTimerRunning(true);
          setSessionState(newState);
          clickSound.play();
        }
        break;
      case "stop":
        if (sessionState === "run" || sessionState === "continue") {
          setIsTimerRunning(false);
          setSessionState(newState);
          clickSound.play();
        }
        break;
      case "wait":
        if (sessionState !== "wait") {
          setIsTimerRunning(false);
          if (sessionState === "stop") {
            setResetContinue(true);
          }

          //Update today stats and save it to backend.
          if (userState === "stats" && mode === "pomodoro") {
            updateTodayStats();
          }

          //Check if a session change is necessary
          if (sessionOver || mode !== "pomodoro") {
            checkNextForSession();
          }
          setCheckTextInput(true);
          clickSound.play();
          setSessionState(newState);
        }
        break;
      default:
    }
  };

  const updateTodayStats = () => {
    let newSeconds = 0;
    let newPomodoro = 0;

    //Calculate new seconds to adding depending if session was in extra or not.
    if (sessionOver) {
      newSeconds = (nextMinutes + minutes) * 60 + seconds;
      newPomodoro = 1;
    } else {
      newSeconds = (nextMinutes - minutes - 1) * 60 + (60 - seconds);
    }

    //Update stats state adding new data
    setStats({...stats, 
      secToday: stats.secToday + newSeconds,
      pomoToday: stats.pomoToday + newPomodoro,
      secWeek: stats.secWeek + newSeconds,
      pomoWeek: stats.pomoWeek + newPomodoro,
      secMonth: stats.secMonth + newSeconds,
      pomoMonth: stats.pomoMonth + newPomodoro,
    });

    let textPomodoro = newPomodoro ? "true" : "false";

    //Send new record of time.
    fetch("/sendRecord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ time: newSeconds, pomodoro: textPomodoro }),
    })
      .then((response) => response.text())
      .then((message) => {})
      .catch((error) => console.log("error", error));
  };

  //Calculating next session according to pomodoro standard
  //and present session
  const checkNextForSession = () => {
    if (mode === "pomodoro") {
      if (cycles < 3) {
        setMode("break");
        defineModeLabel("break");
        setCycles((cycles) => cycles + 1);
      } else {
        setMode("long-break");
        defineModeLabel("long-break");
        setCycles(0);
      }
    } else {
      setMode("pomodoro");
      defineModeLabel("pomodoro");
    }
    setSessionOver(false);
  };

  const timerReseted = () => {
    setResetTimer(false);
  };

  const defineModeLabel = (mode) => {
    switch (mode) {
      case "pomodoro":
        setModeLabel("Pomodoro");
        break;
      case "break":
        setModeLabel("Break");
        break;
      case "long-break":
        setModeLabel("Long Break");
        break;
      default:
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ offset: 2 }}>
          <Timer
            isRunning={isTimerRunning}
            resetTimer={resetTimer}
            resetValue={nextMinutes}
            resetedFunc={timerReseted}
            sessionOver={sessionOver}
            setSessionOver={setSessionOver}
            mode={mode}
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 1 }}>
          {sessionOver ? (
            <h3 className="text-danger">{modeLabel} session finished.</h3>
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 2 }}>
          <ControlButtons
            updateState={changeTimerState}
            sessionState={sessionState}
            resetContinue={resetContinue}
            setResetContinue={setResetContinue}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 2 }}>
          <TextInputs
            changeMode={changeMode}
            mode={mode}
            setNextTimer={setNextMinutes}
            setResetTimer={setResetTimer}
            checkTextInput={checkTextInput}
            setCheckTextInput={setCheckTextInput}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainApp;
