import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Hero from "../Hero/Hero";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="Navbar">
        <Logo />
        <div className="content">
          {location.pathname.indexOf("portal") === -1 ? (
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
          ) : null}
        </div>
      </nav>
      <Hero />
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
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         {/* <Logo /> */}
//         <h1>HEEEEY</h1>
//         <ul className="navBarLinks">
//           <li>
//             {" "}
//             <Link to="/activity">Activity</Link>
//           </li>
//           <li>
//             {" "}
//             <Link to="/exercise">Exercise</Link>
//           </li>
//           <li>
//             {" "}
//             <Link to="/nutrition">Nutrition</Link>
//           </li>
//           <li>
//             {" "}
//             <Link to="/sleep">Sleep</Link>
//           </li>
//           <li>
//             {" "}
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
