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
                Origin City:{' '}
                <span className='font-weight-bold'>{originCityName}</span>
              </div>
            </Col>
            <Col>
              <div className='trip-info-section'>
                Destination City:{' '}
                <span className='font-weight-bold'>{destCityName}</span>
              </div>
            </Col>
            <Col>
              <div className='trip-info-section'>
                Date of Departure:{' '}
                <span className='font-weight-bold'>{depDate}</span>
              </div>
            </Col>
          </Row>
          <Row id='flight-hotel-wrapper'>
            <Col>
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
            <Col>
              <h2 className='flight-hotel-header'>Hotels</h2>
            </Col>
          </Row>
        </Container>
        <div className='my-concierge-footer'>my concierge</div>
      </Container>
    </>
  );
};

export default Results;
