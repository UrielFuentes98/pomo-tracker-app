import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

//Render minutes and seconds
const renderTime = (number) => {
  let numString = "";
  if (number < 10) {
    numString = "0" + number.toString();
  } else {
    numString = number.toString();
  }
  return numString;
};

const renderHours = (number) => {
  let hourString = "";
  if (number > 0) {
    hourString = number.toString() + ":";
  }
  return hourString;
};

const Stats = ({ stats, stateToLogin, setStats }) => {
  const [problemText, setProblemText] = useState("");
  const [problemPresent, setProblemPresent] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch("/main-stats")
      .then((res) => res.json())
      .then((resJSON) => {
        if (isMounted) {
          setStats(() => resJSON);
        }
      })
      .catch((error) => {
        setProblemText("Sorry. There was a problem getting the stats.");
        setProblemPresent(true);
      });
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((message) => {
        if (message === "Session finished.") {
          setProblemText("");
          setProblemPresent(false);
          stateToLogin();
        } else {
          setProblemPresent(true);
          setProblemText("Sorry. Couldn't log out.");
        }
      })
      .catch((error) => {
        setProblemPresent(true);
        setProblemText("Sorry. Couldn't log out.");
        console.error(
          "🚀 ~ file: Register.js ~ line 35 ~ error",
          error.message
        );
      });
  };

  return (
    <div>
      <h2 className="mb-1 mt-xl-5">Stats</h2>
      {!problemPresent && stats.username ? <h3 className="mb-5">Hello, {stats.username}.</h3> : null}
      <p className="text-danger font-weight-bold">
        {problemPresent ? problemText : ""}
      </p>
      <h4>Today.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoToday}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {/* Display hours:minutes:seconds */}
          {renderHours(Math.floor(stats.secToday / 3600))}
          {renderTime(Math.floor((stats.secToday / 60) % 60))}:
          {renderTime(Math.floor(stats.secToday % 60))}
        </span>
      </div>
      <h4 className="mt-3">This week.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoWeek}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {renderHours(Math.floor(stats.secWeek / 3600))}
          {renderTime(Math.floor((stats.secWeek / 60) % 60))}:
          {renderTime(Math.floor(stats.secWeek % 60))}
        </span>
      </div>
      <h4 className="mt-3">This month.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoMonth}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {renderHours(Math.floor(stats.secMonth / 3600))}
          {renderTime(Math.floor((stats.secMonth / 60) % 60))}:
          {renderTime(Math.floor(stats.secMonth % 60))}
        </span>
      </div>
      <Button
        variant="outline-secondary"
        className="btn-sm mt-3 float-right"
        style={{ boxShadow: "none" }}
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Stats;
