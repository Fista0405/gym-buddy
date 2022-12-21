import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import NavigationBar from "../../components/NavigationBar";
import Register from "./Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
