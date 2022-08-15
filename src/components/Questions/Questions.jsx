/* eslint-disable react/jsx-no-bind */
import React, {
  useState, useEffect, useContext,
} from 'react';
import Spinner from '../Spinner/Spinner';
import AppContext from '../../contexts/AppContext';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import Stopwatch from '../Stopwatch/Stopwatch';
import Pagination from '../Pagination/Pagination';
import './Questions.css';

function Questions() {
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const { questions } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function handleNext() {
    setPage(page === 10 ? 1 : page + 1);
    scrollToTop();
  }
  function handlePrev() {
    setPage(page === 1 ? 10 : page - 1);
    scrollToTop();
  }

  function handlePage(event) {
    const num = event.target.value;
    setPage(parseInt(num, 10));
    scrollToTop();
  }

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
              <Stopwatch />
              <div className="w3-content w3-light-gray w3-padding-16" style={{ maxWidth: '700px', marginBottom: '50px' }}>
                <div className="w3-container" style={{ minHeight: '460px', zIndex: '1' }}>
                  {qArray.map((item) => (
                    <SingleQuestion ques={item} key={item.code} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Pagination
            handlePage={handlePage}
            handleNext={handleNext}
            handlePrev={handlePrev}
            page={page}
          />

        </>
      )}
    </>
  );
}

export default Questions;
