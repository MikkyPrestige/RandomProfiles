import "../assets/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading">About Us</h1>
      <div className="about__wrapper">
        <h2 className="about__title">Find new random people all around the world on RandomPeopleApp, the best app for meeting random people!!!</h2>
        <p className="about__paragraph">RandomPeopleApp is an app that helps you discover new random people all around the world. Our aim is to help you find new people around the World randomly from every Race, Gender, Age Group and Nationality etc. </p>
      </div>
      <p className="about__text">The App uses the <strong>randomuser.me</strong> API to fetch random users. </p>
    </div>
  );
}

export default About;