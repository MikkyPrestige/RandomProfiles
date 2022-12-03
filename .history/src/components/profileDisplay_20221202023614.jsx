import { useEffect, useState } from "react";
import { auth, provider, signInWithRedirect, onAuthStateChanged, signOut } from "../config";
import { Avatar } from "./avatar";

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__desc">
      {user ? (
        <div className="profile__user">
          <h1 className="profile__title">Profile Display</h1>
        <div className="profile__display">
          <Avatar image={user.photoURL} style={{ width: "10rem", height: "10rem", borderRadius: "50%" }} />
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
              </div>
        </div>
      ) : (
        <div className="profile__user">
          <div className="sign__wrapper">
            <h1 className="profile__title">You are not signed in.</h1>
            <h2 className="sign__heading">
              Sign in with your Google account
            </h2>
            <button onClick={signIn} className="btn">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;