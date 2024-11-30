import React, { useState, useEffect } from 'react';
const Reloj = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return <div className="reloj">{time}</div>;
  };
  
  export default Reloj;