import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [text, setText] = useState("Hello");
  const [isMouseHover, setIsMouseHover] = useState(false);

  // useEffect to set up the interval
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
 
  function updateTime() {
    const recentTime = new Date().toLocaleTimeString();
    setTime(recentTime);
  }

  function handleClick() {
    setText("Submitted");
  }

  function handleMouseEnter() {
    setIsMouseHover(true);
  }

  function handleMouseLeave() {
    setIsMouseHover(false);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Current Time</button>

      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseHover ? "black" : "white" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
