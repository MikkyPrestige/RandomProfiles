import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} from "../config";
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";

// auth.languageCode = "it";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
          setError("Wrong password!");
        }
        if (error.code === "auth/user-not-found") {
          setError("User not found!");
        }
        console.error(error);
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
  const signOut = (e) => {
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


  // Get redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setSignedIn(true);
          // navigate("/users");
        } else {
          // console.log("No user");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Check auth state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // destructure user
        const { displayName, photoURL, email, phoneNumber } = user;
        // set user state
        setUser({ displayName, photoURL, email, phoneNumber });
        // navigate("/users");
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__desc">
          {user ? (
            <div className="profile__user">
              <h1>Welcome {user.displayName}, You are signed in.</h1>
              <Avatar image={user.photoURL} alt="user" />
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
              <div className="btns">
                <button onClick={signOut} className="sign__btn">
                  Sign Out
                </button>
                <button onClick={handleDelete} className="sign__btn">
                  Delete Account
                </button>
              </div>
            </div>
          ) : (
            <div className="profile__user">
              <div className="profile__form">
                <h1 className="profile__title">You are not signed in.</h1>
                <button onClick={signIn} className="sign__btn">
                  Sign in with Google account
                </button>
                <p className="or">OR</p>
                <h1 className="or">Sign in with email and password</h1>
                <form onSubmit={handleSignIn}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                  />
                  {error && <p className="error">{error}</p>}
                  <button type="submit" className="sign__btn">
                    Sign in
                  </button>
                </form>
              </div>
              <h1>Register a new account </h1>
              <form onSubmit={handleRegister}>
                <div className="profile__group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {error && <p className="error">{error}</p>}
                </div>
                <div className="profile__group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="sign__btn">
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
