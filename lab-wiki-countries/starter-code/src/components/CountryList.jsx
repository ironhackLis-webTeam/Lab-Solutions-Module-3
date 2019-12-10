import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import countries from "./../countries";
import { Link } from "react-router-dom";
const style = {
  maxHeight: "90vh",
  overflow: "scroll"
};

export default function CountryList() {
  return (
    <div style={style}>
      <ListGroup>
        {countries.map(country => (
          <ListGroup.Item key={country.name.common}>
            <Link to={`/${country.cca3}`}>
              {" "}
              {country.name.common} {country.flag}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
