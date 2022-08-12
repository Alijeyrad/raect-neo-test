import React from 'react';

function Input({
  ques, onChange, value, num,
}) {
  return (
    <p className="w3-small">
      <input id={`1${ques.code}${num}`} onChange={onChange} className="w3-radio" type="radio" name={ques.code} value={value} />
      <label htmlFor={`1${ques.code}${num}`}>{value}</label>
    </p>
  );
}

export default Input;
