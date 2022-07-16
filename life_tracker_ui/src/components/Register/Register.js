import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import apiClient from "../services/apiClient";
import "./Register.css";

export default function Signup({ setAppState }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        date: form.date,
        location: form.location,
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
      });

      if (res?.data?.user) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/portal");
      } else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }));
      setIsLoading(false);
    }
  };

  // for deploying with Heroku
  // const handleOnSubmit = async () => {
  //   setIsLoading(true);
  //   setErrors((e) => ({ ...e, form: null }));

  //   if (form.passwordConfirm !== form.password) {
  //     setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
  //     setIsLoading(false);
  //     return;
  //   } else {
  //     setErrors((e) => ({ ...e, passwordConfirm: null }));
  //   }

  //   const { data } = await apiClient.register({
  //     first_name: form.first_name,
  //     last_name: form.last_name,
  //     email: form.email,
  //     password: form.password,
  //     passwordConfirm: form.passwordConfirm,
  //   });

  //   if (data?.user) {
  //     setAppState(data.user.first_name);
  //     setIsLoading(false);
  //     navigate("/portal");
  //     apiClient.setToken(data.token);
  //   } else {
  //     console.log("BIG FAT ERROR", data.user.first_name);
  //     setErrors((e) => ({ ...e, form: "Something went wrong with registration" }));
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="Register">
      <div className="media">
        <img
          src="https://betterme.world/articles/wp-content/uploads/2020/12/Frame-4902-convert.io_-1024x576.jpg"
          alt="runners img"
          style={{ opacity: "0.5", borderRadius: "50px", marginTop: "5rem" }}
        />
      </div>
      <div className="card">
        <h2>Register</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <br />

          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="name">First Name</label>
              <input type="text" name="first_name" placeholder="Mike" value={form.first_name} onChange={handleOnInputChange} />
              {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Last Name</label>
              <input type="text" name="last_name" placeholder="Scholl" value={form.last_name} onChange={handleOnInputChange} />
              {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="mike@scholl.io" value={form.email} onChange={handleOnInputChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input type="password" name="passwordConfirm" placeholder="confirm password" value={form.passwordConfirm} onChange={handleOnInputChange} />
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Create Account"}
          </button>
        </div>

        <div className="footer">
          <p>
            Already have an account? Login{" "}
            <Link to="/login" style={{ color: "violet" }}>
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
