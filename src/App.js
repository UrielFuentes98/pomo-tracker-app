import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dayjs from "dayjs";

function App() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stats, setStats] = useState({
    secToday: 0,
    pomoToday: 0,
    secWeek: 0,
    pomoWeek: 0,
    secMonth: 0,
    pomoMonth: 0,
  });

  useEffect(() => {
    console.log("Current date:", dayjs().format());
    const domain = process.env.REACT_APP_BACKEND_URL || "";
    fetch(`${domain}/checkCookie`, {
      // credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          history.push("/stats");
        } else {
          console.log("🚀 ~ file: App.js ~ line 34 ~ response.ok", response.ok);
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.js ~ line 40 ~ err", err);
        history.push("/login");
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={4} md={3}></Col>
        <Col xl={5} md={6} style={{ marginTop: "25vh" }}>
          <Route path="/">
            <MainSection
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
              stats={stats}
              setStats={setStats}
            />
          </Route>
        </Col>

        <Col xl={2} md={3} style={{ marginTop: "10vh" }}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/stats">
              <Stats
                userName={userName}
                setUserName={setUserName}
                stats={stats}
                setStats={setStats}
              />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
