import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "../config";
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";

// auth.languageCode = "it";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle register form
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        console.log("signed in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorCode);
      });
  };

  // handle sign In
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  // handle sign out
  const signOut = (e) => {
    e.preventDefault();
    auth.signOut();
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
          <h1>DashBoard</h1>
          {user ? (
            <div className="profile__user">
              <h1>Welcome {user.displayName}, You are signed in.</h1>
              <Avatar image={user.photoURL} alt='user' />
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
              <button onClick={signOut} className="sign__btn">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="profile__user">
              <h1>You are not signed in.</h1>
              <button onClick={signIn} className="sign__btn">
                Sign in with Google account
              </button>
              <h1>Register a new account </h1>
              <form onSubmit={handleRegister}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
