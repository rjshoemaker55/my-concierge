import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import HotelDisplay from '../../components/HotelDisplay';
import './styles.css';

const Results = (props) => {
  const filteredList = props.location.state.hotelList.filter(
    (hotel) => hotel.hac_offers.offers.length
  );

  return (
    <>
      <Navbar />
      <div className='hotel-list'>
        <div id='instructions-bar'>
          Click on a hotel's picture to view booking information.
        </div>
        {filteredList.map((hotel) => {
          return (
            <HotelDisplay
              key={Math.random()}
              name={hotel.name}
              locationString={hotel.location_string}
              originalPhoto={
                hotel.photo.images.original.url &&
                hotel.photo.images.original.url
              }
              largePhoto={hotel.photo.images.large.url}
              rankingText={hotel.ranking}
              rating={hotel.rating}
              class={hotel.hotel_class}
              offers={hotel.hac_offers.offers}
              price={hotel.price}
              minimized={hotel.minimized}
            />
          );
        })}
      </div>
    </>
  );
};

export default Results;
