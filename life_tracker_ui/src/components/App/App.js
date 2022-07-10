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

export default function App() {
  const [appState, setAppState] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  //  {userloggedIn ? <NavbarLoggedIn} /> : <Navbar />}

  return (
    <div className="App">
      <BrowserRouter>
        {/* {userloggedIn ? ( */}
        <Navbar user={appState.user} userLoggedIn={userLoggedIn.user} setUserLoggedIn={setUserLoggedIn.user} />
        {/* ) : ( */}
        <NavbarLoggedIn userLoggedIn={userLoggedIn.user} setUserLoggedIn={setUserLoggedIn.user} />
        {/* )} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setAppState={setAppState} />} />
          <Route path="/login" element={<Login setAppState={setAppState} />} />
          <Route path="/portal" element={<Portal setAppState={setAppState} appState={appState} user={appState?.user} />} />
          <Route path="/exercise" element={<Exercise setAppState={setAppState} appState={appState} user={appState?.user} />} />
          <Route path="/nutrition" element={<Nutrition setAppState={setAppState} appState={appState} user={appState?.user} />} />
          <Route path="/sleep" element={<Sleep setAppState={setAppState} appState={appState} user={appState?.user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
