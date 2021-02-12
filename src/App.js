import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [userState, setUserState] = useState("register");

  var rightPanel;

  switch (userState) {
    case "login":
      rightPanel = <Login />;
      break;
    case "register":
      rightPanel = <Register />;
      break;
    case "stats":
      rightPanel = <Stats />;
      break;
    default:
      rightPanel = <Login />;
  }

  return (
    <Container fluid>
      <Row>
        <Col xl={4} md={3}></Col>
        <Col xl={5} md={6} style={{ marginTop: "25vh" }}>
          <MainSection />
        </Col>
        <Col xl={2} md={3} style={{ marginTop: "10vh" }}>
          {rightPanel}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
