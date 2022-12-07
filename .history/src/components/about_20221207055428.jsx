// ABOUT SECTION COMPONENT - This component is the About section of the app that displays the ABout info of the app to the user when they click on the 'ABOUT US' button in the header.

import "../assets/styles/about.css";
import { Back } from "./layout";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading">About Us</h1>
      <div className="about__wrapper">
        <h2 className="about__title">
          Find new random people all around the world on RandomPeopleApp, the
          best app for meeting random people!!!
        </h2>
        <p className="about__paragraph">
          RandomPeopleApp is an app that helps you discover new random people
          all around the world. Our aim is to help you find new people around
          the World randomly from every Race, Gender, Age Group and Nationality
          etc.{" "}
        </p>
      </div>
      <p className="about__text">
        The App uses the <strong>randomuser.me</strong> API to fetch random
        users.{" "}
      </p>
      <Back />
    </div>
  );
};

export default About;
