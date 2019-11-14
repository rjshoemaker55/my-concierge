import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import FormQuestion from '../../components/FormQuestion';

import loadResults from '../../loadResults';

import './styles.css';

const Landing = () => {
  const [firstName, setFirstName] = useState('');
  const [destCity, setDestCity] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [depDate, setDepDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const questionList = [
    {
      mainHeader: 'Welcome to My Concierge.',
      secHeader: `What's your first name?`,
      name: 'firstName',
      value: firstName
    },
    {
      mainHeader: `Hello ${firstName}!`,
      secHeader: `Where are you headed? (city, country)`,
      name: 'destCity',
      value: destCity
    },
    {
      mainHeader: `Ahh ${destCity}, great choice!`,
      secHeader: `Where are you leaving from? (city, country of airport)`,
      name: 'originCity',
      value: originCity
    },
    {
      mainHeader: `Got it. ${originCity} to ${destCity}.`,
      secHeader: `When are you leaving?`,
      name: 'depDate',
      value: depDate
    },
    {
      mainHeader: 'Last step!',
      secHeader: `When will you be returning?`,
      name: 'returnDate',
      value: returnDate
    }
  ];

  let currentQuestion = questionList[questionNumber];

  const handleChange = e => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'destCity':
        setDestCity(e.target.value);
        break;
      case 'originCity':
        setOriginCity(e.target.value);
        break;
      case 'depDate':
        setDepDate(e.target.value);
        break;
      case 'returnDate':
        setReturnDate(e.target.value);
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (questionNumber === 4) {
      return handleFinish();
    }

    await setQuestionNumber(questionNumber + 1);
    currentQuestion = questionList[questionNumber];
  };

  const handleFinish = () => {
    setShowModal(true);
    loadResults({
      firstName,
      destCity,
      originCity,
      depDate,
      returnDate
    });
  };

  return (
    <div className='main-div'>
      <FormQuestion
        mainHeader={currentQuestion.mainHeader}
        secHeader={currentQuestion.secHeader}
        name={currentQuestion.name}
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={currentQuestion.value}
      />
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Please wait while we load your results...</Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default Landing;