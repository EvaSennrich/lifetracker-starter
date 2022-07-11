import React from "react";
import "./NutritionForm.css";

const NutritionForm = () => {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="ExerciseNew">
          <h2>Record Nutrition</h2>
          <div className="form">
            <div className="InputField">
              <label for="name">Name</label>
              <input type="text" name="name" placeholder="Exercise name"></input>
            </div>
            <div className="InputField">
              <label for="category">Category</label>
              <input type="text" name="category" placeholder="Exercise category"></input>
            </div>
            <div className="split-input-field">
              <div className="InputField">
                <label for="duration">Quantity</label>
                <input type="number" name="duration" min="1" max="100000000" defaultValue="1"></input>
              </div>
              <div className="InputField">
                <label for="intensity">Calories</label>
                <input type="number" name="intensity" min="0" max="10" defaultValue="1"></input>
              </div>
            </div>
            <div className="InputField">
              <label for="imageUrl">Image URL</label>
              <input type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value=""></input>
            </div>
            <button class="Button primary large  aqua">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionForm;
