import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
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

  // RecaptchaVerifier
  // const recaptchaVerifier = new RecaptchaVerifier(
  //   "recaptcha-container",
  //   {
  //     size: "normal",
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     },
  //   },
  //   auth
  // );

  const handlePhoneRegister = (e) => {
    e.preventDefault();
    const phoneNumber = getPhoneNumberFromUserInput();
    // const appVerifier = recaptchaVerifier;
    const code = getCodeFromUserInput();
    signInWithPhoneNumber(auth, phoneNumber, )
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            setUser(user);
            console.log(user);
            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
           const errorCode = error.code;
           const errorMessage = error.message;
            alert(errorCode, errorMessage);
            // ...
          });
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const getPhoneNumberFromUserInput = () => {
    return window.prompt("Please enter your phone number");
  };

  const getCodeFromUserInput = () => {
    return window.prompt("Please enter the confirmation code");
  };

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Open a new account with Us Now!!!</h2>
        <div className="register__phone">

          <div id="recaptcha-container"></div>
          <button onClick={handlePhoneRegister} className="sign__btn">
            Register with Phone
          </button>
          <p className="register__text">Or</p>
        </div>
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
