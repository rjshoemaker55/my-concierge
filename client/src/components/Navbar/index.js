import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { loadResults } from '../../loadResults';

import './styles.css';

const Navbar = () => {
  let history = useHistory();
  const [destCity, setDestCity] = useState('');
  const [arriveDate, setArriveDate] = useState('');
  const [numberNights, setNumberNights] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setShowModal(true);
    let hotelList = await loadResults({
      destCity,
      arriveDate,
      numberNights,
    });

    history.push({
      pathname: '/results',
      state: { hotelList },
    });
  };

  return (
    <>
      <div id='navbar-wrapper'>
        <Link id='navbar-title' to='/'>
          my concierge
        </Link>
        <div id='navbar-form'>
          <input
            className='navbar-inputs'
            type='text'
            placeholder='city'
            value={destCity}
            onChange={(e) => setDestCity(e.target.value)}
          />
          <input
            className='navbar-inputs'
            type='text'
            placeholder='arrival date (yyyy-mm-dd)'
            value={arriveDate}
            onChange={(e) => setArriveDate(e.target.value)}
          />
          <input
            className='navbar-inputs'
            type='number'
            placeholder='nights'
            value={numberNights}
            onChange={(e) => setNumberNights(e.target.value)}
          />
          <div id='navbar-submit-button' onClick={handleSubmit}>
            go
          </div>
        </div>
      </div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Please wait while we load your results...</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;
