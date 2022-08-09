import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

function Questions() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      {!load && (
      <Spinner />
      )}

      {load && (
      <div className="w3-animate-left">
        <div className="w3-row-padding w3-padding">
          <div className="w3-content w3-light-gray w3-padding w3-card">
            <div className="w3-container w3-padding" style={{ minHeight: '460px' }}>
              <h3 className="w3-center">Welcome</h3>
              <h5 className="w3-margin-top">
                This test is created using the IPIP scales that represent the
                NEO-PI-R created by Costa and McCrae.
              </h5>

            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Questions;
