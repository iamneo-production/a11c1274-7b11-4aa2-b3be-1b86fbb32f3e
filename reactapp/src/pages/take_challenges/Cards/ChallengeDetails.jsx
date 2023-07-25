import React from 'react';
import './ChallengeDetails.css';

const ChallengeDetails = ({ challenge, onCompleteChallenge, onGoBack }) => {
  const handleCompleteChallenge = () => {
    onCompleteChallenge();
  };

  const handleGoBack = () => {
    onGoBack();
  };

  

  return (
    <div className="challenge-details-page">
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
      <p>
        <strong>Duration:</strong> {challenge.duration}
      </p>
      <p>
        <strong>Goals:</strong> {challenge.goals}
      </p>
      <p>
        <strong>Requirements:</strong> {challenge.requirements}
      </p>



      




      <div className="button-group1">
        <button onClick={handleCompleteChallenge}>Complete Challenge</button>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ChallengeDetails;
