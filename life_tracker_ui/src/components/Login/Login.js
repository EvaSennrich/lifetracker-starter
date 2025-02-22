import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import axios from "axios";
import "./Login.css";

export default function Login({ setAppState, setUserLoggedIn }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form);
      if (res?.data) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/portal");
        setUserLoggedIn(true);
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }));
      setIsLoading(false);
    }
  };

  //for deploying with Heroku

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setErrors((e) => ({ ...e, form: null }));

  //   try {
  //     const { data } = await apiClient.login({
  //       email: form.email,
  //       password: form.password,
  //     });
  //     if (data.user) {
  //       setAppState(data.user);
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

  return (
    <div className="Login">
      <div className="media">
        <img
          src="https://betterme.world/articles/wp-content/uploads/2020/12/Frame-4902-convert.io_-1024x576.jpg"
          alt="runners img"
          style={{ opacity: "0.5", borderRadius: "50px", marginTop: "1.5rem" }}
        />
      </div>

      <div className="card">
        <h2>Login to the Portal</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up{" "}
            <Link to="/register" style={{ color: "violet" }}>
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
