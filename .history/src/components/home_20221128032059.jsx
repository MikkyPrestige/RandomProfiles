// HOME COMPONENT - This component is the Home section of the app that displays app Home page on load and when the 'HOME' button in the header is clicked

import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import { Avatar } from "./avatar";
import FirstFemale from "../assets/img/female-1.jpg";
import SecondFemale from "../assets/img/female-2.jpg";
import ThirdFemale from "../assets/img/female-3.jpg";
import FirstMale from "../assets/img/male-1.jpg";
import SecondMale from "../assets/img/male-2.jpg";

const Home = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/users"); // Redirect the user to the users component when the get started button is clicked
  };

  return (
    <div className="home">
      <div className="home__container">
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
        {/* // sign in button */}
        <div className="home__signIn">
          <button onClick={getStarted} className="home__signIn-btn">Sign in</button>
          </div>
      </div>
    </div>
  );
};

export default Home;


