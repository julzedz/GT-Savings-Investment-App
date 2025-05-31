import React, { useState, useEffect } from 'react';

const CurrentDateDisplay = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);
  return (
    <div>
      {currentDate}
    </div>
  );
};

export default CurrentDateDisplay;
