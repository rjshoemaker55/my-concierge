import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css';

const FlightDisplay = props => {
  return (
    <div className='flight-display-wrapper'>
      <div className='flight-display-header'>
        {props.airline} {props.flightNumber}
      </div>
      <div className='flight-info-wrapper'>
        <img src={props.airlineLogo} className='airline-logo' />
        <div className='flight-info'>
          <div>
            <span className='font-weight-bold'>Departure Time:</span>{' '}
            {props.depTime}
          </div>
          <div>
            <span className='font-weight-bold'>Arrival Time:</span>{' '}
            {props.arriveTime}
          </div>
          <div>
            <span className='font-weight-bold'>Duration:</span> {props.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDisplay;
