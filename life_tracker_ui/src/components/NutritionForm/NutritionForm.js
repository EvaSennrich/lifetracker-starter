import React from "react";
// import axios from "axios";
import { useState } from "react";
import apiClient from "../services/apiClient";
import "./NutritionForm.css";

const NutritionForm = () => {
  // const [nutritions, setNutritions] = useState("");
  // const [initialized, setInitialized] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [nutrition, setNutrition] = useState([]);
  const [nutritionForm, setNutritionForm] = useState({
    name: "",
    category: "",
    quantity: 1,
    calories: 1,
    image_url: "",
  });

  const handleOnInputChangeNutrition = (event) => {
    // console.log("CLIcKED");
    // if (!nutritionForm) {
    setNutritionForm((field) => ({ ...field, [event.target.name]: event.target.value }));
    // } else {
    setErrors((e) => ({ ...e, nutritionForm: "Please fill out missing fields." }));
    // }
  };

  // const handleOnSubmitNutrition = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setErrors((e) => ({ ...e, nutritionForm: null }));

  //   try {
  //     const res = await axios.post(`http://localhost:3001/exercise`, nutritionForm);
  //     if (res?.data) {
  //       // setAppState(res.data);
  //       // setIsLoading(false);
  //       // navigate("/portal");
  //       // setUserLoggedIn(true);
  //     } else {
  //       setErrors((e) => ({ ...e, form: "Invalid username/password combination" }));
  //       setIsLoading(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     const message = err?.response?.data?.error?.message;
  //     setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }));
  //     setIsLoading(false);
  //   }
  // };

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

    // log data to see object
    console.log("DATA ----->", data);
    setNutrition([...nutrition, data.nutrition]);
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
