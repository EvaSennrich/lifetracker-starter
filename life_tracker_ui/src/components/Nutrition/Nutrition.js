import React from "react";
import { Link } from "react-router-dom";
import "./Nutrition.css";

const Nutrition = () => {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <Link to="/nutrition-form">
              <button className="Button outline small outline aqua">Record Nutrition</button>
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

export default Nutrition;
