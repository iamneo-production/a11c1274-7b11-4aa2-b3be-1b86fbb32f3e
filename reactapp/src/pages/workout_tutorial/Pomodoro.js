import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pomodoro.css';

// const Pomodoro = ({ duration }) => {
//   const navigate=useNavigate();
//   const [time, setTime] = useState(60);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (!isActive && time !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, time]);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const calculateProgress = () => {
//     return ((time / 60) * 100).toFixed(2);
//   };

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setTime(60);
//   };

//   return (
//     <div className="timer">
//       <div className="circle-progress">
//         <div className="circle" style={{ background: `conic-gradient(#3498db ${calculateProgress()}%, #fff ${calculateProgress()}%)` }} />
//       </div>
//       <div className="time-display">
//         {formatTime(time)}
//       </div>
//       <div className="buttons">
//         {isActive ? (
//           <button onClick={toggleTimer}>Pause</button>
//         ) : (
//           <button onClick={toggleTimer}>Start</button>
//         )}
//         <button onClick={resetTimer}>Reset</button>
        
//       </div>
//     </div>
//   );
// };

// export default Pomodoro;
const Pomodoro = ({ onClose }) => {
  const [duration] = useState(60); // 60 seconds (1 minute)
  const [time, setTime] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const calculateProgress = () => {
    return ((1 - time / duration) * 100).toFixed(2);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(duration);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="circle-progress">
          <div className="circle" style={{ background: `conic-gradient(#3498db ${calculateProgress()}%, #fff ${calculateProgress()}%)` }} />
        </div>
        <div className="time-display">
          {formatTime(time)}
        </div>
        <div className="buttons">
          {isActive ? (
            <button onClick={toggleTimer}>Pause</button>
          ) : (
            <button onClick={toggleTimer}>Start</button>
          )}
          <button onClick={resetTimer}>Reset</button>
         
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
      
    </div>
  );
};

export default Pomodoro;