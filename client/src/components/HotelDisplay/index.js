import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import './styles.css';
import backgroundImage from '../../images/Background.jpg';

const HotelDisplay = (props) => {
  const [showInfo, setShowInfo] = useState('none');
  const largePhotoUrl = props.largePhoto;

  const HotelWrapper = styled.div`
    background-image: url(${props.originalPhoto});
    background-size: cover;
    width: 100%;
    height: 400px;
    background-attachment: fixed;
    position: relative;
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
    position: absolute;
    right: 10px;
    width: 45%;
    height: 73%;
    background: rgba(0, 0, 0, 0.85);
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease 0.45s;
    -moz-animation: fadeIn ease 0.45s;
    -o-animation: fadeIn ease 0.45s;
    -ms-animation: fadeIn ease 0.45s;
  `;

  return (
    <HotelWrapper
      onClick={(e) => setShowInfo(showInfo === 'none' ? 'block' : 'none')}
    >
      <HotelHeadingWrapper>
        <HotelMainHeading>{props.name.toLowerCase()}</HotelMainHeading>
        <HotelSecHeading>{props.locationString.toLowerCase()}</HotelSecHeading>
      </HotelHeadingWrapper>
      <HotelInfoWrapper>
        <div className='hotel-info-header'>information</div>
        <div className='hotel-info-body'>
          <div className='hotel-ranking-text'>"{props.rankingText}"</div>
        </div>
      </HotelInfoWrapper>
    </HotelWrapper>
  );
};

export default HotelDisplay;
