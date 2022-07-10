import * as React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
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
}

// <div className="Home">
//   <div className="jumbo">
//     {/* <h3 className="subheading">COVID-19 VACCINE HUB</h3> */}

//     {/* <h1 className="heading">Vaccine Scheduler</h1> */}
//   </div>

//   <div className="actions">
//     <div className="links">
//       <Link to="/register">{/* <button className="btn primary">Schedule First Appointment</button> */}</Link>
//       <Link to="/portal">{/* <button className="btn outline">Confirm Appointment</button> */}</Link>
//     </div>
//   </div>

//   <div className="media">{/* <img src={medicine} alt="medicine" /> */}</div>
// </div>
