import React, { useState ,useEffect } from 'react';
import { FaDumbbell, FaRunning, FaRegClock, FaBicycle, FaHeartbeat } from 'react-icons/fa';
import { GiJumpingRope, GiWeightLiftingUp, GiMuscleUp, GiStrong } from 'react-icons/gi';
import { RiFireFill, RiMentalHealthFill, RiEmotionUnhappyLine } from 'react-icons/ri';
import ChallengeCard from './Cards/ChallengeCard.jsx';
import ChallengeDetails from './Cards/ChallengeDetails.jsx';
import ChallengeCompletion from './Cards/ChallengeCompletion.jsx';
import './TakeChallengesPage.css';
import { useNavigate } from 'react-router-dom';

const challengesData = [
  {
    id: 1,
    name: '30-Day Plank Challenge',
    description: 'Improve core strength with a 30-day plank program.',
    duration: '30 days',
    goals: 'Strengthen core muscles',
    requirements: 'No equipment required',
    icon: <FaDumbbell />,
  },
  {
    id: 2,
    name: 'Push-Up Challenge',
    description: 'Build upper body strength with a 21-day push-up challenge.',
    duration: '21 days',
    goals: 'Increase push-up repetitions',
    requirements: 'No equipment required',
    icon: <GiMuscleUp />,
  },
  {
    id: 3,
    name: 'Squat Challenge',
    description: 'Tone your lower body with a 14-day squat challenge.',
    duration: '14 days',
    goals: 'Improve lower body strength and endurance',
    requirements: 'No equipment required',
    icon: <FaRunning />,
  },
  {
    id: 4,
    name: 'Yoga Flexibility Challenge',
    description: 'Enhance flexibility and mobility with a 30-day yoga challenge.',
    duration: '30 days',
    goals: 'Increase flexibility and body awareness',
    requirements: 'Yoga mat recommended',
    icon: <RiFireFill />,
  },
  {
    id: 5,
    name: 'Cardio HIIT Challenge',
    description: 'Boost cardiovascular fitness with a 28-day high-intensity interval training challenge.',
    duration: '28 days',
    goals: 'Improve cardiovascular endurance and burn calories',
    requirements: 'No equipment required',
    icon: <FaBicycle />,
  },
  {
    id: 6,
    name: 'Abdominal Sculpt Challenge',
    description: 'Define your abs with a 21-day abdominal sculpting challenge.',
    duration: '21 days',
    goals: 'Tone and strengthen abdominal muscles',
    requirements: 'No equipment required',
    icon: <GiStrong />,
  },
  {
    id: 7,
    name: 'Dumbbell Strength Challenge',
    description: 'Build strength with a 4-week dumbbell training challenge.',
    duration: '4 weeks',
    goals: 'Increase overall body strength',
    requirements: 'Dumbbells required',
    icon: <FaDumbbell />,
  },
  {
    id: 8,
    name: 'Flexibility and Balance Challenge',
    description: 'Improve flexibility and balance with a 30-day challenge.',
    duration: '30 days',
    goals: 'Enhance body flexibility and balance',
    requirements: 'No equipment required',
    icon: <RiMentalHealthFill />,
  },
  {
    id: 9,
    name: 'Couch to 10K Challenge',
    description: 'Gradually train to run a 10K race with this 12-week challenge.',
    duration: '12 weeks',
    goals: 'Build running endurance and complete a 10K race',
    requirements: 'Running shoes recommended',
    icon: <FaRunning />,
  },
  {
    id: 10,
    name: 'Upper Body Strength Challenge',
    description: 'Focus on building upper body strength with a 3-week challenge.',
    duration: '3 weeks',
    goals: 'Increase strength in the upper body muscles',
    requirements: 'Dumbbells or resistance bands recommended',
    icon: <GiWeightLiftingUp />,
  },
  {
    id: 11,
    name: 'Pilates Core Challenge',
    description: 'Strengthen and tone your core with a 21-day Pilates challenge.',
    duration: '21 days',
    goals: 'Improve core stability and control',
    requirements: 'Yoga or exercise mat recommended',
    icon: <FaRegClock />,
  },
  {
    id: 12,
    name: 'Jump Rope Fitness Challenge',
    description: 'Get fit and improve coordination with a 30-day jump rope challenge.',
    duration: '30 days',
    goals: 'Increase cardiovascular fitness and burn calories',
    requirements: 'Jump rope required',
    icon: <GiJumpingRope />,
  },
  {
    id: 13,
    name: 'Full Body HIIT Challenge',
    description: 'Target your entire body with a 4-week high-intensity interval training challenge.',
    duration: '4 weeks',
    goals: 'Improve overall strength and endurance',
    requirements: 'No equipment required',
    icon: <FaHeartbeat />,
  },
  {
    id: 14,
    name: 'Mindfulness Meditation Challenge',
    description: 'Cultivate mindfulness and reduce stress with a 14-day meditation challenge.',
    duration: '14 days',
    goals: 'Enhance mental well-being and relaxation',
    requirements: 'Quiet space and meditation app recommended',
    icon: <RiEmotionUnhappyLine />,
  },
  {
    id: 15,
    name: 'Leg Day Challenge',
    description: 'Focus on leg strength and muscle development with a 3-week challenge.',
    duration: '3 weeks',
    goals: 'Tone and strengthen leg muscles',
    requirements: 'Dumbbells or resistance bands recommended',
    icon: <GiWeightLiftingUp />,
  },
];

const getChallengeProgressFromStorage = () => {
  const storedProgress = localStorage.getItem('challengeProgress');
  return storedProgress ? JSON.parse(storedProgress) : initializeChallengeProgress();
};

const initializeChallengeProgress = () => {
  return challengesData.map((challenge) => ({
    id: challenge.id,
    completedDays: 0,
  }));
};

const TakeChallengesPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [challengeProgress, setChallengeProgress] = useState(getChallengeProgressFromStorage());

  useEffect(() => {
    localStorage.setItem('challengeProgress', JSON.stringify(challengeProgress));
  }, [challengeProgress]);

  const handleChallengeSelection = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleChallengeCompletion = () => {
    const updatedProgress = challengeProgress.map((challenge) =>
      challenge.id === selectedChallenge.id
        ? { ...challenge, completedDays: challenge.completedDays + 1 }
        : challenge
    );
    setChallengeProgress(updatedProgress);
    setChallengeCompleted(true);
  };

  const handleGoBack = () => {
    setSelectedChallenge(null);
    setChallengeCompleted(false);
  };
  const navigate=useNavigate();

  return (
    <div className="take-challenges-page">
      <div className='challenges-btn-align'>
        <button onClick={()=>navigate("/user/dashboard")} >Back To Dashboard</button>
      </div>
      
      {!selectedChallenge && !challengeCompleted && (
        <>
          <h2 className="page-title">Take Challenges</h2>
          <div className="challenges-list">
            {challengesData.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onSelectChallenge={handleChallengeSelection}
              />
            ))}
          </div>
        </>
      )}

      {selectedChallenge && !challengeCompleted && (
        <>
          <ChallengeDetails
            challenge={selectedChallenge}
            onCompleteChallenge={handleChallengeCompletion}
            onGoBack={handleGoBack}
          />
        </>
      )}

      {challengeCompleted && (
        <>
          <ChallengeCompletion challenge={selectedChallenge} onGoBack={handleGoBack} />
          
        </>
      )}
    </div>
  );
};

export default TakeChallengesPage;