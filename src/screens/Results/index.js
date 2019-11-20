import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FlightDisplay from '../../components/FlightDisplay';
import './styles.css';

const flightList = require('../../flightList.json').flights;

console.log(flightList);

const Results = props => {
  const {
    firstName,
    originCityId,
    originCityName,
    destCityId,
    destCityName,
    depDate,
    returnDate
  } = props.location.state;

  return (
    <>
      <Container>
        <Container id='results-page-wrapper'>
          <h1 id='results-header'>
            You're all set for a great trip, {firstName}!
          </h1>
          <div className='divider'></div>
          <Row id='trip-info-wrapper'>
            <Col>
              <div className='trip-info-section'>
                Origin: {props.originCityName}
                <span className='font-weight-bold'>{originCityName}</span>
              </div>
            </Col>
            <Col>
              <div className='trip-info-section'>
                Destination: {props.destCityName}
                <span className='font-weight-bold'>{destCityName}</span>
              </div>
            </Col>
            <Col>
              <div className='trip-info-section'>
                Date of Departure: {props.depDate}
                <span className='font-weight-bold'>{depDate}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='flight-hotel-wrapper'>
              <h2 className='flight-hotel-header'>Flights</h2>
              {flightList.map(flight => (
                <FlightDisplay
                  depTime={flight.depTime}
                  arriveTime={flight.arriveTime}
                  duration={flight.duration}
                  airline={flight.airline}
                  airlineLogo={flight.airlineLogo}
                  flightNumber={flight.flightNumber}
                  key={flight.flightNumber}
                />
              ))}
            </Col>
            <Col className='flight-hotel-wrapper'>
              <h2 className='flight-hotel-header'>Hotels</h2>
              <div id='to-be-added'>to be added...</div>
            </Col>
          </Row>
        </Container>
        <div className='my-concierge-footer'>my concierge</div>
      </Container>
    </>
  );
};

export default Results;
