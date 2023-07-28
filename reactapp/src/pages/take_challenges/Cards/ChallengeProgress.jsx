import React, { useState } from 'react';
// import { Favorite } from '@mui/icons-material';

const ChallengeProgress = ({ challenge }) => {
  const [currentDay, setCurrentDay] = useState(1); // Track the current day of the challenge
  const [completedDays, setCompletedDays] = useState(0); // Track the number of completed days
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false); // Track challenge completion status

  const handleCompleteDay = () => {
    const duration = parseInt(challenge.duration, 10); // Convert challenge duration to a number
    if (currentDay < duration) {
      setCompletedDays(completedDays + 1);
      setCurrentDay(currentDay + 1);
    } else if (currentDay === duration) {
      setCompletedDays(completedDays + 1);
      setIsChallengeCompleted(true);
    }
  };

  return (
    <div className="challenge-progress">
      <h3>Challenge Progress</h3>
      <p>
        Day {currentDay} of {challenge.duration}
      </p>
      {isChallengeCompleted ? (
        <p>You have completed the whole challenge! </p>
      ) : (
        <p>
          Completed: {completedDays} out of {challenge.duration} days
        </p>
      )}
      <div >
      <button style={{margin:'10px 10px 0px 70px'}} onClick={handleCompleteDay}>Complete Day</button>
      </div>

        

    </div>
  );
};

export default ChallengeProgress;
