import React from "react";

import "./App.css";
import CountryDetail from "./components/CountryDetail";

import { Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/NavBar";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" text="white">
        <Navbar.Brand className="ml-5" href="/">
          Wiki Countries
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={CountryDetail} />
        <Route path="/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
