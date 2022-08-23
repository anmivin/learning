import React, { useState, useEffect } from "react";


const Timer = () => {
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() =>{

        setSecs(secs+1);

        if(secs === 59){
            setMins(mins+1);
            setSecs(0);
        }
        if (mins === 59) {
            setHours(hours+1);
            setMins(0);        }

    }, 1000)

    return ()=> clearInterval(timer);
  });

  



  return (
    <div className="app">
      <div className="time">
        <div>Timer</div>
        <div>{mins<10? '0' +mins : mins}:{secs<10? '0'+secs: secs}</div>
        
        
      </div>
    </div>
  );
};



export default Timer