import React from "react";
import { Link } from "react-router-dom";
import "./Sleep.css";

const Sleep = () => {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Sleep</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <Link to="/sleep-form">
              <button className="Button outline small outline blue">Add Sleep</button>
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

export default Sleep;
