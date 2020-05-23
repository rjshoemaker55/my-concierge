import React from 'react';

import './styles.css';

const FormQuestion = (props) => {
  return (
    <div className='input-wrapper'>
      <h1 className='main-heading'>{props.name}</h1>
      <h2 className='sec-heading'>{props.locationString}</h2>
      <img src={props.orginalPhoto} />
    </div>
  );
};

export default FormQuestion;
