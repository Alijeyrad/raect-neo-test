import React from 'react';

function Select({ page, handlePage }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select label={`${page * 5}` - `${(page - 1) * 5}`} value={page} onChange={handlePage} className="w3-select w3-round" name="page" id="page" style={{ width: '30%' }}>
      {arr.map((item) => (
        <option value={item} key={item}>
          {((item - 1) * 5) + 1}
          {' '}
          -
          {' '}
          {item * 5}
        </option>
      ))}
    </select>
  );
}

export default Select;
