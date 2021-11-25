import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Home from "./components/Home";
import SingleJobOffer from "./components/SingleJobOffer";

function App() {

  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col sm={12} className="text-center background-div App App-header">
            <Link to="/">
              <h1 className="App-link">Human Resource Mashine</h1>
            </Link>
          </Col>
          {/* <Home /> */}
        </Row>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:companyName' element={<SingleJobOffer />} />
          <Route path='*' element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
