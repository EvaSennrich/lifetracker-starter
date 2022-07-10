import * as React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import moment from "moment";
// import medicalCare from "../../assets/undraw_medical_care_deep_blue.svg";
import "./Portal.css";

export default function Portal({ user, setAppState }) {
  // const navigate = useNavigate();
  // const isAuthenticated = Boolean(user?.email);

  // const handleOnLogout = () => {
  //   setAppState({});
  //   navigate("/");
  // };

  // const title = isAuthenticated ? "Appointment Confirmed" : "Please login to the portal to see your appointment.";

  // const content = isAuthenticated ? (
  //   <>
  //     <p className="appt">Your appointment is on {appointmentDate}</p>
  //     <p className="location">
  //       Please head to <strong>{user.location}</strong> on that day.
  //     </p>
  //   </>
  // ) : (
  //   <p className="appt">Thank you!</p>
  // );

  // const button = isAuthenticated ? (
  //   <button className="btn primary" onClick={handleOnLogout}>
  //     Logout
  //   </button>
  // ) : (
  //   <Link to="/">
  //     <button className="btn primary">Logout</button>
  //   </Link>
  // );

  return (
    // <div className="Portal">
    //   <div className="content">
    //     {/* {isAuthenticated ? <h1>Welcome, {user.first_name}!</h1> : null} */}
    //     <h1>HELLOOOOOOO</h1>

    //     <div className="card">
    //       <div className="header">{/* <div className={`title ${isAuthenticated ? "green" : ""}`}>{title}</div> */}</div>
    //       {/* <div className="content">{content}</div> */}
    //       <div className="footer">{button}</div>
    //     </div>
    //   </div>

    //   <div className="media">{/* <img src={medicalCare} alt="medical care" /> */}</div>
    // </div>
    <div className="ActivityPage">
      <div className="content">
        <div className="actions">
          <h2 className="heading">Activity feed</h2>
          <div className="buttons">
            <button className="Button outline small outline gold">Add Exercise</button>
            <button className="Button outline small outline blue">Log Sleep</button>
            <button className="Button outline small outline aqua">Record Nutrition</button>
          </div>
        </div>
        <div className="stats">
          <div className="main">
            <div className="SummaryStat large gold">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large purple">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large aqua">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div className="more">
            <div className="SummaryStat small teal">
              <div className="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small orange">
              <div className="background">
                <p>Avg Exercise Intensity</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small red">
              <div className="background">
                <p>Total Hours Slept</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
