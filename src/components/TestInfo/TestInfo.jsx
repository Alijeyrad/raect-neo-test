import React from 'react';

function TestInfo() {
  return (
    <>
      <p>Few Things To Keep In Mind:</p>
      <ul>
        <li>
          What follows are phrases describing people&apos;s behaviors.
          Please use the rating scale next to each phrase to describe
          {' '}
          <span className="w3-text-red">
            how accurately
            each statement describes you
          </span>
          .
        </li>
        <li className="w3-padding-16">
          Describe yourself as you generally are now, not as you wish to be in the future.
          Describe yourself as you honestly see yourself,
          in relation to other people you know
        </li>
        <li>
          Your responses will be kept in
          {' '}
          <span className="w3-text-red">absolute confidence</span>
          ,
          so that you can describe yourself in an honest manner.
        </li>
        <li className="w3-padding-16">
          Please read each statement carefully, and then click the circle
          that corresponds to the accuracy of the statement.
        </li>
      </ul>
    </>
  );
}

export default TestInfo;
