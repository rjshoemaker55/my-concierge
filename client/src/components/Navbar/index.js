import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { loadResults } from '../../loadResults';
import Error from '../Error';

import './styles.css';

const Navbar = () => {
  let history = useHistory();
  const [destCity, setDestCity] = useState('');
  const [arriveDate, setArriveDate] = useState('');
  const [numberNights, setNumberNights] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorShow, setErrorShow] = useState('hide');
  const [errorText, setErrorText] = useState('');

  const handleSubmit = async () => {
    setShowModal(true);

    try {
      let hotelList = await loadResults({
        destCity,
        arriveDate,
        numberNights,
      });
      history.push({
        pathname: '/results',
        state: { hotelList },
      });
    } catch (err) {
      console.log(err);
      setShowModal(false);
      setErrorText(err);
      setErrorShow('show');
    }

    setShowModal(false);
  };

  return (
    <>
      <div id='navbar-wrapper'>
        <Link id='navbar-title' to='/'>
          my concierge
        </Link>
        <div id='navbar-form'>
          <input
            className={`navbar-inputs ${errorShow === 'show' && 'error-text'}`}
            type='text'
            placeholder='city'
            value={errorShow === 'show' ? errorText : destCity}
            onChange={(e) =>
              errorShow === 'show'
                ? () => {
                    setDestCity('');
                    console.log('done');
                    setErrorShow('hide');
                  }
                : () => {
                    setDestCity(e.target.value);
                    console.log('other');
                  }
            }
          />
          <input
            className='navbar-inputs'
            type='text'
            placeholder='arrival date (yyyy-mm-dd)'
            onChange={(e) => setArriveDate(e.target.value)}
            value={arriveDate}
          />
          <input
            className='navbar-inputs'
            type='number'
            placeholder='nights'
            value={numberNights}
            onChange={(e) => setNumberNights(e.target.value)}
          />
          <button
            type='submit'
            id='navbar-submit-button'
            onClick={handleSubmit}
          >
            go
          </button>
        </div>
        <select name='sortBy' id='sort-dropdown'>
          <option value={null}>sort by...</option>
          <option value='price'>price</option>
          <option value='rating'>rating</option>
          <option value='distance'>distance</option>
        </select>
      </div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Please wait while we load your results...</Modal.Title>
        </Modal.Header>
      </Modal>
      {/* <Error display={errorShow} errorClose={() => setErrorShow('hide')}>
        {errorText}
      </Error> */}
    </>
  );
};

export default Navbar;
