import React from 'react';
import './WellcomeCard.css';
import questions from '../../util/questions.json';

function WellcomeCard() {
  return (
    <div className="w3-animate-top">
      <div className="w3-row-padding w3-padding">
        <div className="w3-content w3-light-gray">
          <div className="w3-card w3-container" style={{ minHeight: '460px' }}>
            <h3 className="w3-center">Welcome</h3>
            {questions.questions.map((item) => (
              <p>{item.code}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellcomeCard;
