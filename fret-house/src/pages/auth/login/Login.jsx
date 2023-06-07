import {useState} from "react";

import { Link } from "react-router-dom";
import {Eye, EyeOff} from "react-feather";

import { useAuth } from "../../../context/AuthContext";
import "./Login.css";

const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
  const { handleLogin } = useAuth();

  const handleGuestLogin = () => {
    handleLogin("adarshbalika@gmail.com", "adarshbalika");
  };

  return (
    <main className="container login-container">
      <h2 className="fs-heading fw-bold login-header">LOGIN</h2>

      <form className="login-form">
        <label className="field-labels">
          <input
            type="text"
            placeholder="Email"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
        </label>
        <label className="field-labels">
          <input
            type={passwordType}
            placeholder="Password"
            required
            className="login-fields bg-accent-bg fw-regular"
          />
          {
            passwordType === "password" ? <EyeOff size={20} onClick={() => setPasswordType("text")}/> : <Eye size={20} onClick={() => setPasswordType("password")}/>
          }
          
        </label>

        <button className="primary-button login-buttons">LOGIN</button>
        <button className="accent-button login-buttons" onClick={handleGuestLogin}>LOGIN AS GUEST</button>
      </form>

      <p className="signup-link">Don't have an account?  <Link to="/signup">Sign Up</Link></p>
    </main>
  );
};

export default Login;
