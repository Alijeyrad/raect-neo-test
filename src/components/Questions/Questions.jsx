/* eslint-disable max-len */
import React, {
  useState, useEffect, useContext,
} from 'react';
import Spinner from '../Spinner/Spinner';
import AppContext from '../../contexts/AppContext';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Questions.css';

function Questions() {
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1);
  }, []);

  function handleNext() {
    setPage(page === 10 ? 1 : page + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function handlePrev() {
    setPage(page === 1 ? 10 : page - 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // function handlePage(event) {
  //   const num = event.target.innerText;
  //   setPage(parseInt(num, 10));
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  const { questions } = useContext(AppContext);

  const qArray = questions.filter(
    (item, index) => index < (page * 5) && index >= ((page - 1) * 5),
  );

  return (
    <>
      {!load && (
      <Spinner />
      )}

      {load && (
        <>
          <div className="w3-animate-left">
            <div className="w3-row-padding w3-padding">
              <div className="w3-content w3-light-gray w3-padding-16" style={{ maxWidth: '700px', marginBottom: '50px' }}>
                <div className="w3-container" style={{ minHeight: '460px', zIndex: '1' }}>
                  {qArray.map((item) => (
                    <SingleQuestion ques={item} key={item.code} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w3-animate-left w3-center">
            <div
              className="w3-row-padding"
              style={{
                zIndex: '1', position: 'fixed', bottom: '0', width: '100%', padding: '0 16px',
              }}
            >
              <div className="w3-content w3-blue-gray w3-padding-16" style={{ maxWidth: '700px', opacity: '0.97' }}>
                <div className="w3-container" style={{ zIndex: '1' }}>
                  <div className="pagination">
                    <button type="button" onClick={handlePrev} className="w3-button w3-large w3-round">&laquo;</button>
                    <select className="w3-select w3-round" name="page" id="page" style={{ width: '30%' }}>
                      <option value={`${page * 5}` - `${(page - 1) * 5}`} selected>
                        {((page - 1) * 5) + 1}
                        {' '}
                        -
                        {(page * 5)}
                      </option>
                      <option value={`${page * 5}` - `${(page - 1) * 5}`}>
                        {((page - 1) * 5) + 1}
                        {' '}
                        -
                        {(page * 5)}
                      </option>
                    </select>
                    <button type="button" onClick={handleNext} className="w3-button w3-large w3-round">&raquo;</button>
                    <button type="button" onClick={handleNext} className="submitButton w3-button w3-large w3-round w3-light-gray w3-wide">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </>
  );
}

export default Questions;
