// HOME COMPONENT - This component is the Home section of the app that displays app Home page on load and when the 'HOME' button in the header is clicked

import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import { Avatar } from "./avatar";
import FirstFemale from "../assets/img/female-1.jpg";
import SecondFemale from "../assets/img/female-2.jpg";
import ThirdFemale from "../assets/img/female-3.jpg";
import FirstMale from "../assets/img/male-1.jpg";
import SecondMale from "../assets/img/male-2.jpg";
import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged } from "../config";
import { useEffect, useState } from "react";

const Home = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/users"); // Redirect the user to the users component when the get started button is clicked
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
        console.log(user);
        const { displayName, email, phoneNumber, photoURL } = user;
        setUser({ displayName, email, phoneNumber, photoURL });
        // navigate("/users");
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="home">
      {/* <div className="home__container">
        <div className="desc">
          <h1 className="desc__heading">Random people finder</h1>
          <p className="desc__paragraph">Finding great friends isn't easy, and it doesn't have to be. With Random User, you can connect with people all over the world for no cost. Random Users is the best place to find new friends all around the world. Join now!</p>
          <button onClick={getStarted} className="desc__cta">Get started</button>
        </div>
        <div className="home__wrapper">
          <h2 className="home__heading">Random friend finder</h2>
          <p className="home__text">Find new friends from every country and every race of the world</p>
          <div className="home__img">
            <Avatar image={FirstFemale} alt="Female One" />
            <Avatar image={SecondFemale} alt="Female Two" />
            <Avatar image={FirstMale} alt="Male One" />
            <Avatar image={ThirdFemale} alt="Female Three" />
            <Avatar image={SecondMale} alt="Male Two" />
          </div>
        </div>
      </div> */}
      {/* // sign in button */}
      <div className="signIn-msg">
        {user ? (
          <div className="user">
            <h1 className="user__name">Welcome {user.displayName}, you are signed In</h1>
            {/* <img src={user.photoURL} alt="user" /> */}
            <Avatar image={user.photoURL} />
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
            <button onClick={signOut} className="sign__btn">Sign Out</button>
          </div>
        ) : (
          <div className="signIn">
            <h1 className="signIn__heading">Sign In</h1>
            <button onClick={signIn} className="sign__btn">
              Sign In with Google account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


