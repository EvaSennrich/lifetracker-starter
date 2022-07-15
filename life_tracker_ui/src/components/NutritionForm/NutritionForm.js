import React from "react";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import "./NutritionForm.css";

const NutritionForm = () => {
  // const [nutritions, setNutritions] = useState("");
  // const [initialized, setInitialized] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [nutritions, setNutritions] = useState([]);
  const [nutritionForm, setNutritionForm] = useState({
    name: "",
    category: "",
    quantity: 1,
    calories: 1,
    image_url: "",
  });

  const handleOnInputChangeNutrition = (event) => {
    setNutritionForm((field) => ({ ...field, [event.target.name]: event.target.value }));

    setErrors((e) => ({ ...e, nutritionForm: "Please fill out missing fields." }));
  };

  const handleOnSubmitNutrition = async () => {
    if (nutritionForm.name === "" || nutritionForm.category === "" || nutritionForm.quantity === "" || nutritionForm.calories === "") {
      return alert("Please fill out the entire form.");
    }

    setIsLoading(true);

    const { data } = await apiClient.addNutrition({
      data: {
        name: nutritionForm.name,
        category: nutritionForm.category,
        quantity: nutritionForm.quantity,
        calories: nutritionForm.calories,
        image_url: nutritionForm.image_url,
      },
    });
    navigate("/nutrition");
    // log data to see object
    console.log("DATA ----->", data);
    // setNutritions([...nutritions, data.nutritions]);
    setIsLoading(false);
  };

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
              <label>Name</label>
              <input type="text" name="name" placeholder="Nutrition name" value={nutritionForm.name} onChange={handleOnInputChangeNutrition} />
              {/* {errors.email && <span className="error">{errors.email}</span>} */}
            </div>
            <div className="InputField">
              <label>Category</label>
              <input type="text" name="category" placeholder="Nutrition category" value={nutritionForm.category} onChange={handleOnInputChangeNutrition} />
            </div>
            <div className="split-input-field">
              <div className="InputField">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="100000000"
                  // defaultValue="1"
                  value={nutritionForm.quantity}
                  onChange={handleOnInputChangeNutrition}
                />
              </div>
              <div className="InputField">
                <label>Calories</label>
                <input
                  type="number"
                  name="calories"
                  min="0"
                  max="10"
                  // defaultValue="1"
                  value={nutritionForm.calories}
                  onChange={handleOnInputChangeNutrition}
                />
              </div>
            </div>
            <div className="InputField">
              <label>Image URL</label>
              <input
                type="text"
                name="image_url"
                placeholder="http://www.food-image.com/1"
                value={nutritionForm.image_url}
                onChange={handleOnInputChangeNutrition}
              />
            </div>
            <button className="Button primary large  aqua" disabled={isLoading} onClick={handleOnSubmitNutrition}>
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionForm;
