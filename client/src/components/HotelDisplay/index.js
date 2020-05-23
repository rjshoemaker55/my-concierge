import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css';

const HotelDisplay = (props) => {
  return (
    <div className='hotelDisplay'>
      <h1 className='main-heading'>{props.name}</h1>
      <h2 className='sec-heading'>{props.locationString}</h2>
      <img src={props.smallPhoto} />
    </div>
  );
};

export default HotelDisplay;
