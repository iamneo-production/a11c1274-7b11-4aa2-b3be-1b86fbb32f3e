import React from 'react';
// import { Celebration } from '@mui/icons-material';
import './ChallengeCompletion.css';

const ChallengeCompletion = ({ challenge, onGoBack }) => {
  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className="challenge-completion-page">
      <h2>Congratulations!</h2>
      <p>You have successfully completed the {challenge.name} challenge.</p>
      <div className="button-group">
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ChallengeCompletion;
