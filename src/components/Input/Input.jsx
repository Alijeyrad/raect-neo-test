import React from 'react';

function Input({
  ques, value, num, checked, handleChange,
}) {
  return (

    <p className="w3-small">
      <input id={`1${ques.code}${num}`} onChange={handleChange} className="w3-radio" type="radio" name={ques.code} value={value} checked={checked ? checked === parseInt(num, 10) : false} />
      <label htmlFor={`1${ques.code}${num}`}>{value}</label>
    </p>

  );
}

export default Input;
