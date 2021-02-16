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

  return (
    <Container fluid>
      <Row>
        <Col xl={4} md={3}></Col>
        <Col xl={5} md={6} style={{ marginTop: "25vh" }}>
          <MainSection />
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
          {userState === "stats" && <Stats />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
