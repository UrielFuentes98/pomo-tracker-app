import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [userState, setUserState] = useState("login");
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

  return (
    <Container fluid>
      <Row>
        <Col xl={4} md={3}></Col>
        <Col xl={5} md={6} style={{ marginTop: "25vh" }}>
          <MainSection
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
            stats={stats}
            setStats={setStats}
          />
        </Col>
        <Col xl={2} md={3} style={{ marginTop: "10vh" }}>
          {userState === "login" && (
            <Login
              stateToRegister={() => setUserState("register")}
              stateToStats={() => setUserState("stats")}
            />
          )}
          {userState === "register" && (
            <Register stateToStats={() => setUserState("stats")} />
          )}
          {userState === "stats" && (
            <Stats
              stats={stats}
              stateToLogin={() => setUserState("login")}
              setStats={setStats}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
