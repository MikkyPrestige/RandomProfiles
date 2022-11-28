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
        const { displayName, email, phoneNumber, photoURL } = user;
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
          <h1>Profile</h1>
          {user ? (
            <div className="profile__user">
              <h1>Welcome {user.displayName}, You are signed in.</h1>
              <Avatar src={user.photoURL} />
              
              }
