import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import './styles.css';

const HotelDisplay = (props) => {
  const [showInfo, setShowInfo] = useState('none');
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

  const HotelInfoWrapper = styled.div`
    display: ${showInfo};
  `;

  return (
    <HotelWrapper
      onClick={(e) => setShowInfo(showInfo === 'none' ? 'block' : 'none')}
    >
      <HotelHeadingWrapper>
        <HotelMainHeading>{props.name.toLowerCase()}</HotelMainHeading>
        <HotelSecHeading>{props.locationString.toLowerCase()}</HotelSecHeading>
      </HotelHeadingWrapper>
      <HotelInfoWrapper>Info</HotelInfoWrapper>
    </HotelWrapper>
  );
};

export default HotelDisplay;
