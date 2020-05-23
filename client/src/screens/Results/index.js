import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HotelDisplay from '../../components/HotelDisplay';
import './styles.css';

const Results = (props) => {
  const hotelList = props.location.state.hotelList;

  return (
    <>
      {hotelList.map((hotel) => (
        <HotelDisplay
          name={hotel.name}
          locationString={hotel.location_string}
          smallPhoto={hotel.photo.images.small.url}
          thumbnailPhoto={hotel.photo.images.thumbnail.url}
          originalPhoto={hotel.photo.images.original.url}
          largePhoto={hotel.photo.images.large.url}
          rankingText={hotel.ranking}
          rating={hotel.rating}
          class={hotel.hotel_class}
          offers={hotel.hac_offers.offers}
        />
      ))}
    </>
  );
};

export default Results;
