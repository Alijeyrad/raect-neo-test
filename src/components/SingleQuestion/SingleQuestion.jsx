/* eslint-disable react/jsx-no-bind */
import React, { useReducer } from 'react';
import Input from '../Input/Input';
import './SingleQuestion.css';
import questionReducer from '../../reducers/questions.reducer';

function SingleQuestion({ ques }) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(questionReducer, {
    // reducer initial state
  });

  function handleChange(event) {
    console.log(event.target.name); // which question is answered
    console.log(event.target.value); // the answer to the question

    // send answer to the reducer
    dispatch({
      type: 'ANSWER',
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="w3-container w3-padding-16 w3-border w3-margin w3-animate-opacity ">
      <h6 style={{ marginTop: '0' }}>
        <b>
          <span>{ques.number}</span>
          {' '}
          -
          {' '}
          {ques.text}

        </b>
      </h6>
      <div className="w3-margin-left">
        <Input
          ques={ques}
          onChange={handleChange}
          value="Very Accurate"
          num="1"
        />
        <Input
          ques={ques}
          onChange={handleChange}
          value="Moderately Accurate"
          num="2"
        />
        <Input
          ques={ques}
          onChange={handleChange}
          value="Neither Inaccurate nor Accurate"
          num="3"
        />
        <Input
          ques={ques}
          onChange={handleChange}
          value="Moderately Inaccurate"
          num="4"
        />
        <Input
          ques={ques}
          onChange={handleChange}
          value="Very Inaccurate"
          num="5"
        />
      </div>
    </div>
  );
}

export default SingleQuestion;
