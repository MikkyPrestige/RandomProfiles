import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  provider,
  signInWithRedirect,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  deleteUser,
} from "../config";
import { Avatar } from "./avatar";

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // handle invisible RecaptchaVerifier
  const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }}, auth);

  // sign in with phone number


  // handle sign In
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
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
        console.error(errorMessage);
        alert(errorCode);
      });
  };

  // handle sign out
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("User signed out!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // handle delete user
  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(auth.currentUser)
      .then(() => {
        console.log("User deleted!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__desc">
          {user ? (
            <div className="profile__user">
              <h1 className="profile__title">Profile Display</h1>
              <div className="profile__paragraph">
                <Avatar
                  image={user.photoURL}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "50%",
                  }}
                />
                <p className="profile__detail">
                  <strong>Signed in account name: </strong>
                  {user.displayName}
                </p>
                <p className="profile__detail">
                  <strong>Signed in email: </strong>
                  {user.email}
                </p>
              </div>
              <div className="profile__buttons">
                <Link to="/users" className="profile__link">
                  View Users
                </Link>
                <Link to="/update" className="btn__link">
                  Update Password
                </Link>
              </div>
              <div className="btn__wrapper">
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
                <button onClick={handleDelete} className="btn">
                  Delete Account
                </button>
              </div>
            </div>
          ) : (
            <div className="profile__user">
              <div className="sign__wrapper">
                <h1 className="profile__title">Already have an account?</h1>
                <h2 className="sign__heading">
                  Sign in with your Google account
                </h2>
                <button onClick={signIn} className="sign__btn">
                  Sign In
                </button>
                <p className="or">Or</p>
                <h2 className="sign__heading">
                  Sign in with your phone number
                </h2>
                <form onSubmit={handleSignIn} className="sign__form">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="sign__input"
                    required
                  />
                  <button
                    id="sign-in-button"
                    className="sign__btn"
                    onClick={recaptchaVerifier}
                  >
                    Sign In
                  </button>
                </form>
                <h2 className="sign__heading">
                  Sign in with your email and password
                </h2>
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
                    Sign In
                  </button>
                </form>
                <div>
                  <span>Forgot your password? </span>
                  <button onClick={handlePasswordReset} className="btn">
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          )}
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

export default ProfileDisplay;
