import React, { useState, useEffect } from "react";

function DigiClock() {
  const [time, setTime] = useState(new Date());

  //when we mount -> create a interval thats update every 1 s
  useEffect(() => {
    // const intervalId = setInterval(callback, 1000)
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //clean up function -> if we unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // 13 % 12 = 1 || 12

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigiClock;
