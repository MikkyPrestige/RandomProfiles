import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged } from "../config";
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

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
        const { displayName, email, phoneNumber, photoURL } = user;
        // set user state
        setUser({ displayName, email, phoneNumber, photoURL });
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
          <h1>Your Profile</h1>
          {signedIn ? (
            <div className="profile__user">
              <h1>Welcome {user.displayName}, You are signed in.</h1>
              <Avatar image={user.photoURL} />
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
              <button onClick={signOut} className="sign__btn">Sign Out</button>
            </div>
          ) : (
            <div className="profile__user">
              <h1>You are not signed in.</h1>
              <button onClick={signIn} className="sign__btn">Sign In with Google account</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
