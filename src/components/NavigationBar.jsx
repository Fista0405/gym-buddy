import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Gym Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-white" to="">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  className="text-decoration-none text-white"
                  to="/register"
                >
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-white" to="/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
