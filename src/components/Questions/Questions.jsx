import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import AppContext from '../../contexts/AppContext';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

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
      <div className="w3-animate-left">
        <div className="w3-row-padding w3-padding">
          <div className="w3-content w3-light-gray w3-padding-16 w3-card" style={{ maxWidth: '700px' }}>
            {/* <div className="w3-header w3-light-grey w3-padding" style={{ zIndex: '5' }}>
              <h2 className="w3-bar">Hi</h2>
            </div> */}
            <div className="w3-container" style={{ minHeight: '460px', zIndex: '1' }}>
              {qArray.map((item) => (
                <SingleQuestion ques={item} key={item.code} />
              ))}
            </div>
            <div className="w3-bar w3-round w3-large" style={{ padding: '0 17px' }}>
              <button onClick={handlePrev} type="button" className="w3-button">&#10094; Previous</button>
              <button onClick={handleNext} type="button" className="w3-button w3-right">Next &#10095;</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Questions;
