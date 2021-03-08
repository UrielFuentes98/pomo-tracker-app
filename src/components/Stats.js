import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";


//Render string to display hours.
const renderHours = (hours) => {
  let hourString = "";
  if (hours > 0) {
    hourString = hours.toString() + " hr";
    if (hours > 1) {
      hourString += "s";
    }
    hourString += ". ";
  }

  return hourString;
};

const Stats = ({ stats, setStats }) => {
  const [problemText, setProblemText] = useState("");
  const [problemPresent, setProblemPresent] = useState(false);
  const history = useHistory();
  const [minutes, setMinutes] = useState({ today: 0, week: 0, month: 0 });
  const [hours, setHours] = useState({ today: 0, week: 0, month: 0 });

  // Send main stats request in first render and save it in stats state.
  useEffect(() => {
    let isMounted = true;
    const domain = process.env.REACT_APP_BACKEND_URL || "";
    fetch(`${domain}/main-stats?date=${dayjs().format("YYYY-MM-DD")}`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then((resJSON) => {
        if (isMounted) {
          setStats(() => resJSON);
        }
      })
      .catch((error) => {
        setProblemText("Sorry. There was a problem getting the stats.");
        console.log(error);
        setProblemPresent(true);
      });
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //Calculate hours and minutes for each category
    setHours({
      today: Math.floor(stats.secToday / 3600),
      week: Math.floor(stats.secWeek / 3600),
      month: Math.floor(stats.secMonth / 3600),
    });
    setMinutes({
      today: Math.floor((stats.secToday / 60) % 60),
      week: Math.floor((stats.secWeek / 60) % 60),
      month: Math.floor((stats.secMonth / 60) % 60),
    });
  }, [stats.secToday, stats.secWeek, stats.secMonth]);

  //Send logout request to delete session token in backend and go to /login
  const logout = () => {
    const domain = process.env.REACT_APP_BACKEND_URL || "";
    fetch(`${domain}/logout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((message) => {
        if (message === "Session finished.") {
          setProblemText("");
          setProblemPresent(false);
          history.push("/login");
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
      <h2 className="mb-1 mt-xl-5 font-weight-bold" style={{color: "saddlebrown"}}>Stats</h2>
      {!problemPresent && stats.username ? (
        <h3 className="mb-3">Hello, {stats.username}.</h3>
      ) : null}
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
          {renderHours(hours.today)}
          {minutes.today} min.
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
          {renderHours(hours.week)}
          {minutes.week} min.
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
          {renderHours(hours.month)}
          {minutes.month} min.
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
