import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Portal from "../Portal/Portal";
import "./App.css";
import NavbarLoggedIn from "../NavbarLoggedIn/NavbarLoggedIn";
import Exercise from "../Exercise/Exercise";
import Nutrition from "../Nutrition/Nutrition";
import Sleep from "../Sleep/Sleep";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import NutritionForm from "../NutritionForm/NutritionForm";
import SleepForm from "../SleepForm/SleepForm";

export default function App() {
  const [appState, setAppState] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {userLoggedIn ? (
          <NavbarLoggedIn userLoggedIn={userLoggedIn.user} setUserLoggedIn={setUserLoggedIn} setAppState={setAppState} />
        ) : (
          <Navbar user={appState.user} userLoggedIn={userLoggedIn.user} setUserLoggedIn={setUserLoggedIn.user} setAppState={setAppState} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setAppState={setAppState} />} />
          <Route path="/login" element={<Login setAppState={setAppState} setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/portal" element={<Portal setAppState={setAppState} appState={appState} user={appState?.user} />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/exercise-form" element={<ExerciseForm setAppState={setAppState} />} />
          <Route path="/nutrition-form" element={<NutritionForm />} />
          <Route path="/sleep-form" element={<SleepForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
