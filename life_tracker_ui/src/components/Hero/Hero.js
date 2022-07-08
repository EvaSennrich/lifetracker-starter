import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Landing">
      <div className="hero">
        <img src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="hero img" />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>
      <div className="titles">
        <div className="title">
          <img src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg" alt="fitness img" />
          <p>Fitness</p>
        </div>
        <div className="title">
          <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg" alt="food img" />
          <p>Food</p>
        </div>
        <div className="title">
          <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg" alt="rest img" />
          <p>Rest</p>
        </div>
        <div className="title">
          <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg" alt="planner img" />
          <p>Planner</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
