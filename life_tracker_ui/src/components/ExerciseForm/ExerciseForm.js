import React from "react";
import { useState, axios, navigate } from "react";
import "./ExerciseForm.css";

const ExerciseForm = ({ setAppState }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState({});

  const handleOnSubmitExercise = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`http://localhost:3001/exercise`);
      if (res?.data) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/portal");
      } else {
        // setErrors((e) => ({ ...e, form: "Invalid username/password combination" }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      // const message = err?.response?.data?.error?.message;
      // setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }));
      setIsLoading(false);
    }
  };

  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Exercise</h1>
      </div>
      <div className="content">
        <div className="ExerciseNew">
          <h2>Add Exercise</h2>
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
                <label for="duration">Duration (min)</label>
                <input type="number" name="duration" min="1" max="100000000" defaultValue="1"></input>
              </div>
              <div className="InputField">
                <label for="intensity">Intensity (1-10)</label>
                <input type="number" name="intensity" min="1" max="10" defaultValue="1"></input>
              </div>
            </div>
            <button className="Button primary large gold" disabled={isLoading} onClick={handleOnSubmitExercise}>
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// FOR BUTTON: ================================

// const [isLoading, setIsLoading] = useState(false);

// const handleOnSubmit = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);
//   setErrors((e) => ({ ...e, form: null }));

//   try {
//     const res = await axios.post(`http://localhost:3001/auth/login`, form);
//     if (res?.data) {
//       setAppState(res.data);
//       setIsLoading(false);
//       navigate("/portal");
//       setUserLoggedIn(true);
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

// <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
//   {isLoading ? "Loading..." : "Login"}
// </button>;

export default ExerciseForm;
