import React from "react";
import "./SleepForm.css";

const SleepForm = () => {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Sleep</h1>
      </div>
      <div className="content">
        <div className="ExerciseNew">
          <h2>Add Sleep</h2>
          <div className="form">
            <div className="InputField">
              <label for="startTime">Start Time</label>
              <input type="datetime-local" name="startTime" value=""></input>
            </div>
            <div className="InputField">
              <label for="endTime">End Time</label>
              <input type="datetime-local" name="endTime" value=""></input>
            </div>
            <button class="Button primary large  blue">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepForm;
