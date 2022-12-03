import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  provider,
  signInWithRedirect,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
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

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((resetError) => {
        if (resetError.code === "auth/invalid-email") {
          setResetError("This email address is invalid!");
        }
        if (resetError.code === "auth/user-not-found") {
          setResetError("User not found!");
        }
        console.error(resetError);
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
              <Avatar
                image={user.photoURL}
                style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
              />
              <p className="profile__detail">
                <strong>Signed in account name: </strong>
                {user.displayName}
              </p>
              <p className="profile__detail">
                <strong>Signed in email: </strong>
                {user.email}
              </p>
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
                <h1 className="profile__title">You are not signed in.</h1>
                <h2 className="sign__heading">
                  Sign in with your Google account
                </h2>
                <button onClick={signIn} className="sign__btn">
                  Sign In
                </button>
                <p className="or">Or</p>
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
                <span>Forgot your password?{" "}</span>
                <button
                  onClick={handlePasswordReset}
                  className="reset__btn"
                >
                  Reset Password
                </button>
                {
                  resetError && <p className="error">{resetError}</p>
                }
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
                  {registerError && (
                    <p className="error">{registerError}</p>
                  )}
                  <button type="submit" className="sign__btn">
                    Register
                  </button>

                  {/* <p className="register__text">
                    Already have an account?{" "}
                    <Link to="/login" className="register__link">
                      Sign In
                    </Link>
                  </p> */}
                </form>
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
