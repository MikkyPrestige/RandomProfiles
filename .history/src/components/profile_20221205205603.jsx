import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  // RecaptchaVerifier,
  // signInWithPhoneNumber,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  // sign in form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // Register form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);

  const navigate = useNavigate();

  // const getPhoneNumberFromUserInput = () => {
  //   return window.prompt("Please enter your phone number");
  // };

  // const getCodeFromUserInput = () => {
  //   return window.prompt("Please enter the confirmation code");
  // };

  // Invisible recaptchaVerifier
  // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-btn', {
  //   'size': "visible",
  //   'callback': (response) => {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onSignInSubmit();
  //   }
  // }, auth);

  // // sign in with phone
  // const onSignInSubmit = (e) => {
  //   e.preventDefault();
  //   const phoneNumber = getPhoneNumberFromUserInput();
  //   const appVerifier = window.recaptchaVerifier;
  //   const code = getCodeFromUserInput();
  //   signInWithPhoneNumber(auth, phoneNumber, appVerifier).then(
  //     (confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the user in with confirmationResult.confirm(code).
  //       confirmationResult.confirm(code).then((result) => {
  //         // User signed in successfully.
  //         setUser(result.user);
  //         setSignedIn(true);
  //         navigate("/profileDisplay");
  //         // ...
  //       }).catch((error) => {
  //         // User couldn't sign in (bad verification code?)
  //         // ...
  //       });
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //     });
  // }

  // handle register form
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(() => {
        // Signed in
        console.log("User account created & signed in!");
      })
      .catch((registerError) => {
        if (registerError.code === "auth/email-already-in-use") {
          setRegisterError("This email address is already in use!");
        }
        if (registerError.code === "auth/invalid-email") {
          setRegisterError("This email address is invalid!");
        }
        if (registerError.code === "auth/weak-password") {
          setRegisterError("Password should be at least 6 characters");
        }
        console.error(registerError);
      });
  };

  // sign in with email and password
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Wrong password!");
        }
        if (error.code === "auth/user-not-found") {
          setError("User not found!");
        }
        console.error(error);
      });
  };

  // handle sign In
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  // Send a password reset email
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // console.log("Password reset email sent!");
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode);
        alert(errorMessage, errorMessage);
      });
  };

  // Get redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setSignedIn(true);
        } else {
          console.log("No user");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  // Check auth state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/users");
      } else {
        setUser(null);
      }
    });
  }, [navigate]);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__desc">
          <div className="profile__user">
            <div className="sign__wrapper">
              <h1 className="profile__title">You are not signed in.</h1>
              <h2 className="sign__heading">
                Sign in with your Google account
              </h2>
              <button onClick={signIn} className="sign__btn">
                Click here
              </button>
              <p className="or">OR</p>
              {/* Sign in with Phone number */}
              {/* <h2 className="sign__heading">Sign in with your phone number</h2>
               <form onSubmit={onSignInSubmit}>
                 <button id="sign-in-btn" className="sign__btn">
                   Click here
                </button>
               </form> */}
              {/* <p className="or">OR</p> */}
              <h2 className="sign__heading">Sign in with email and password</h2>
              <form onSubmit={handleSignIn} className="sign__form">
                <label htmlFor="email" className="sign__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="sign__input"
                />
                <label htmlFor="password" className="sign__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="sign__input"
                />
                {error && <p className="error">{error}</p>}
                <button type="submit" className="sign__btn">
                  Sign in
                </button>
              </form>
              <div>
                <span>Forgot your password? </span>
                <button onClick={handlePasswordReset} className="btn">
                  Reset Password
                </button>
              </div>
            </div>
            <div className="register__container">
              <h2 className="register__title">
                Open a new account with Us Now!!!
              </h2>
              <form onSubmit={handleRegister} className="register__form">
                <div className="register__group">
                  <label htmlFor="email" className="register__label">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={registerEmail}
                    placeholder="Enter your email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
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
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="register__input"
                  />
                </div>
                {registerError && <p className="error">{registerError}</p>}
                <button type="submit" className="sign__btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="register__text">
        <Link to="/" className="register__link">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default Profile;
