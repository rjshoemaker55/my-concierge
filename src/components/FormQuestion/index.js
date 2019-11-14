import React from 'react';

import './styles.css';

const FormQuestion = props => {
  return (
    <div className='input-wrapper'>
      <h1 className='main-heading'>{props.mainHeader}</h1>
      <h2 className='sec-heading'>{props.secHeader}</h2>
      <form onSubmit={props.onSubmit}>
        <input
          className='input'
          type='text'
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
};

export default FormQuestion;
