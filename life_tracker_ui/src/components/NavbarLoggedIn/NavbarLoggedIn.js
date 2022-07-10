import * as React from "react";
import { Link } from "react-router-dom";
import "./NavbarLoggedIn.css";
import Hero from "../Hero/Hero";
// import Home from "../Home/Home";

export default function NavbarLoggedIn({ userLoggedIn, setUserLoggedIn }) {
  return (
    <>
      {userLoggedIn ? (
        <NavbarLoggedIn />
      ) : (
        <nav className="Navbar">
          <Logo />
          <div className="content">
            <ul className="links">
              <li>
                <Link to="/portal">Activity</Link>
              </li>
              <li>
                <Link to="/exercise">Exercise</Link>
              </li>
              <li>
                <Link to="/nutrition">Nutrition</Link>
              </li>
              <li>
                <Link to="/sleep">Sleep</Link>
              </li>
              <li>
                <Link to="/">
                  <button className="signUp-btn">Log Out</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
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
