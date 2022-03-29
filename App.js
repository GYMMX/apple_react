import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Detail from "./detail";
import Data from "./data";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">샤핑몰</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Route exact path="/">
          <div className="jumbo">
            <h1>20% Session Off</h1>
            <p>설명어쩌고저쩌고</p>
            <button type="button" class="btn btn-primary">
              Lean more
            </button>
          </div>

          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
