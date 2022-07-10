import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hero from "../Hero/Hero";
// import Home from "../Home/Home";
import NavbarLoggedIn from "../NavbarLoggedIn/NavbarLoggedIn";

export default function Navbar({ userLoggedIn, setUserLoggedIn, setAppState }) {
  return (
    <>
      <nav className="Navbar">
        <Logo />
        <div className="content">
          <ul className="links">
            <li>
              <Link to="/login">Activity</Link>
            </li>
            <li>
              <Link to="/login">Exercise</Link>
            </li>
            <li>
              <Link to="/login">Nutrition</Link>
            </li>
            <li>
              <Link to="/login">Sleep</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">
                <button className="signUp-btn">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
const Logo = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
        alt="codepath-logo"
        style={{ width: "5rem", height: "5rem" }}
      />
    </Link>
  );
};
