import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  // updatePassword,
  signOut,
  deleteUser,
} from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./avatar";
import "../assets/styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  // handle register form
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        console.error(error);
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
          setErrors("Wrong password!");
        }
        if (error.code === "auth/user-not-found") {
          setErrors("User not found!");
        }
        console.error(errors);
      });
  };

  // handle onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  // handle sign In
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
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

  // update password
  // const handleUpdatePassword = (e) => {
  //   e.preventDefault();
  //   const user = auth.currentUser;
  //   const newPassword = getASecureRandomPassword();
  //   updatePassword(user, newPassword)
  //     .then(() => {
  //       console.log("Password updated!");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };


  // Send a password reset email
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
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

  // Get redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setSignedIn(true);
          navigate("/users");
        } else {
          // console.log("No user");
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
          {user ? (
            <div className="profile__user">
                {/* update password */}
                {/* <form onSubmit={handleUpdatePassword}>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Update password"
                    className="input"
                  /> */}
                  {/* <button type="submit" className="btn">
                    Update Password
                  </button> */}
                {/* </form> */}
                {/* send password reset email */}
                {/* <form onSubmit={handlePasswordReset}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input"
                  /> */}
                  <button type="submit" onClick={handlePasswordReset} className="btn">
                    Send Password Reset Email
                  </button>
                {/* </form> */}

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
                  Click here
                </button>
                <p className="or">OR</p>
                <h2 className="sign__heading">
                  Sign in with email and password
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="sign__input"
                  />
                  {errors && <p className="error">{errors}</p>}
                  <button type="submit" className="sign__btn">
                    Sign in
                  </button>
                </form>
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
                      value={email}
                      placeholder="Enter your email"
                      onChange={handleChange}
                      className="register__input"
                    />
                  </div>
                  {error && <p className="error">{error}</p>}
                  <div className="register__group">
                    <label htmlFor="password" className="register__label">
                      Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handleChange}
                      className="register__input"
                    />
                  </div>
                  <button type="submit" className="sign__btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
