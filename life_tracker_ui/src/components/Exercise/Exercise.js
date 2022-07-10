import React from "react";
import { Link } from "react-router-dom";
import "./Exercise.css";

const Exercise = () => {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Exercise</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <Link to="/exercise-form">
              <button className="Button outline small outline gold">Add Exercise</button>
            </Link>
          </div>
          <div className="feed">
            <div className="empty">
              <h2>Nothing Here Yet.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
