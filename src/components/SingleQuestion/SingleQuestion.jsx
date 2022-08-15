/* eslint-disable react/jsx-no-bind */
import React, {
  useEffect, useState, useContext,
} from 'react';
import Input from '../Input/Input';
import AppContext from '../../contexts/AppContext';

function SingleQuestion({ ques }) {
  const [checked, setChecked] = useState(0);
  const [render, setRender] = useState(0);
  const { dispatch } = useContext(AppContext);

  function handleChange(event) {
    // send answer to the reducer
    dispatch({
      type: 'ANSWER',
      name: event.target.name,
      value: event.target.value,
    });
    setRender(render + 1);
  }

  useEffect(() => {
    switch (window.localStorage.getItem(ques.code)) {
      case 'Very Accurate':
        setChecked(1);
        break;
      case 'Moderately Accurate':
        setChecked(2);
        break;
      case 'Neither Inaccurate nor Accurate':
        setChecked(3);
        break;
      case 'Moderately Inaccurate':
        setChecked(4);
        break;
      case 'Very Inaccurate':
        setChecked(5);
        break;
      default:
        break;
    }
  }, [render]);

  return (
    <div className="w3-container w3-padding-16 w3-border w3-margin w3-animate-opacity">
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
          value="Very Accurate"
          num="1"
          checked={checked}
          handleChange={handleChange}
        />
        <Input
          ques={ques}
          value="Moderately Accurate"
          num="2"
          checked={checked}
          handleChange={handleChange}
        />
        <Input
          ques={ques}
          value="Neither Inaccurate nor Accurate"
          num="3"
          checked={checked}
          handleChange={handleChange}
        />
        <Input
          ques={ques}
          value="Moderately Inaccurate"
          num="4"
          checked={checked}
          handleChange={handleChange}
        />
        <Input
          ques={ques}
          value="Very Inaccurate"
          num="5"
          checked={checked}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SingleQuestion;
