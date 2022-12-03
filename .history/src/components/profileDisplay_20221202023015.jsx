import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../config";
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

  return (
    <div className="profile">
      <h1 className="profile__title">Profile Display</h1>
      {user ? (
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
            <button onClick={handleSignIn} className="btn">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
              
export default ProfileDisplay;