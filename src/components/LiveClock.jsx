import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      // Format the time as HH:MM:SS
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update time immediately when component mounts
    updateTime();

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean-up function: This runs when the component unmounts
    // or before the effect runs again (if dependencies change, though not here)
    return () => {
      clearInterval(intervalId); // Clear the interval to prevent memory leaks
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return <p>{currentTime}</p>;
}

export default LiveClock;
