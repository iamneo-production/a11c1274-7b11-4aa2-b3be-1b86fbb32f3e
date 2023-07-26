import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge, onSelectChallenge }) => {
  const handleSelectChallenge = () => {
    onSelectChallenge(challenge);
  };

  return (
    <div className="challenge-card" onClick={handleSelectChallenge}>
      <h3>{challenge.name}</h3>
      <p>{challenge.description}</p>
      <div className="challenge-card-icon">{challenge.icon}</div> 
      <div className="challenge-details">
        <p>
          <strong>Duration:</strong> {challenge.duration}
        </p>
        <p>
          <strong>Goals:</strong> {challenge.goals}
        </p>
        <p>
          <strong>Requirements:</strong> {challenge.requirements}
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;
