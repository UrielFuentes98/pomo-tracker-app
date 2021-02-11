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
      <Col xs={4}></Col>
        <Col xs={4} className="justify-content-center">
          <MainSection />
        </Col>
        <Col>{rightPanel}</Col>
      </Row>
    </Container>
  );
}

export default App;
