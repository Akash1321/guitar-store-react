import {useState} from "react";

import { Link } from "react-router-dom";
import {Eye, EyeOff} from "react-feather";

import "./SignUp.css";
import { useAuth } from "../../../context/AuthContext";

const SignUp = () => {
    const [passwordType, setPasswordType] = useState("password");
  const { handleSignUp } = useAuth();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    handleSignUp(name, email, password);
  };

  return (
    <main className="container login-container text-primary-400">
      <h1 className="fs-heading fw-bold">SIGN UP</h1>

      <form className="login-form" onSubmit={handleOnSubmit}>
        <label className="field-labels">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
        </label>
        <label className="field-labels">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
        </label>
        <label className="field-labels">
          <input
            type={passwordType}
            name="password"
            placeholder="Password"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
          {
            passwordType === "password" ? <EyeOff size={20} onClick={() => setPasswordType("text")}/> : <Eye size={20} onClick={() => setPasswordType("password")}/>
          }
        </label>
        <label className="field-labels">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
        </label>

        <button className="primary-button login-buttons">SIGN UP</button>
      </form>
      <p>Already have an account <Link to="/login">Login</Link></p>
    </main>
  );
};

export default SignUp;
