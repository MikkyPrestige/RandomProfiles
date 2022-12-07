import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/profile.css";
import { Back } from "./layout";

const Register = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profileDisplay");
      } else {
        setUser(null);
      }
    });
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, confirmPassword)
      .then(() => {
        // Signed in
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("This email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          setError("This email address is invalid!");
        }
        if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters");
        }
        if (confirmPassword !== password) {
          setError("Passwords do not match!");
        }
        console.error(error);
      });
  };

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Open a new account with Us Now!!!</h2>
        <form onSubmit={handleRegister} className="register__form">
          <div className="register__group">
            <label htmlFor="email" className="register__label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="register__input"
            />
          </div>
          <div className="register__group">
            <label htmlFor="password" className="register__label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register__input"
            />
          </div>
          <div className="register__group">
            <label htmlFor="confirmPassword" className="register__label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register__input"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="sign__btn">
            Register
          </button>
        </form>
      </div>
      <Back />
    </div>
  );
};

export default Register;
