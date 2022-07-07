import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* <Logo /> */}
        <h1>HEEEEY</h1>
        <ul className="navBarLinks">
          <li>
            {" "}
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            {" "}
            <Link to="/exercise">Exercise</Link>
          </li>
          <li>
            {" "}
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            {" "}
            <Link to="/sleep">Sleep</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
