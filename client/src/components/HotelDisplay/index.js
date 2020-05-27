import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import './styles.css';

const HotelDisplay = (props) => {
  const largePhotoUrl = props.largePhoto;

  const HotelWrapper = styled.div`
    background-image: url(${largePhotoUrl});
    background-size: cover;
    width: 100%;
    height: 400px;
    background-attachment: fixed;
  `;

  const HotelHeadingWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
  `;

  const HotelMainHeading = styled.h1`
    color: white;
    font-size: 45px;
    font-weight: bold;
  `;

  const HotelSecHeading = styled.h2`
    color: black;
    font-size: 23px;
    font-weight: bold;
  `;

  return (
    <HotelWrapper>
      <HotelHeadingWrapper>
        <HotelMainHeading>{props.name}</HotelMainHeading>
        <HotelSecHeading>{props.locationString}</HotelSecHeading>
      </HotelHeadingWrapper>
    </HotelWrapper>
  );
};

export default HotelDisplay;
