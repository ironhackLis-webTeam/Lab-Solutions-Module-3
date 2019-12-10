import React, { Component } from "react";

import countries from "./../countries";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import CountryList from "./CountryList";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  componentDidUpdate(prevProps) {
    let countryCode = this.props.match.params.cca3;
    if (prevProps.match.params.cca3 !== countryCode) {
      let countryFromParams = countries.find(item => item.cca3 === countryCode);
      this.setState({
        country: countryFromParams
      });
    }
  }

  boarderName(border) {
    return countries.find(country => country.cca3 === border).name.common;
  }

  render() {
    const country = this.state.country;

    return (
      <div>
        <Row>
          <Col className="col-5">
            <CountryList />
          </Col>

          {country && (
            <Col className="col-7">
              <tbody className="table">
                <thead></thead>
                <tbody>
                  <div>
                    <tr>
                      <td style={{ width: "30%" }}>{country.capital}</td>
                      <td>{country.name.common}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {country.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Border</td>
                      <td>
                        <ul>
                          {(country.borders.length === 0 && (
                            <td>No Borders</td>
                          )) ||
                            country.borders.map(border => (
                              <li>
                                <td>
                                  <Link to={`/${border}`}>
                                    {this.boarderName(border)}
                                  </Link>
                                </td>
                              </li>
                            ))}
                        </ul>
                      </td>
                    </tr>
                  </div>
                </tbody>
              </tbody>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
