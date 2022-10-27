import "../assets/styles/home.css";
import FirstFemale from "../assets/img/female-1.jpg";
import SecondFemale from "../assets/img/female-2.jpg";
import ThirdFemale from "../assets/img/female-3.jpg";
import FirstMale from "../assets/img/male-1.jpg";
import SecondMale from "../assets/img/male-2.jpg";

const Avatar = ({ image = "", alt = "", style={} }) => {
  return (
    <div className="avatar">
      <img src={image} alt={alt} style={style} />
    </div>
  );
};



const Home = () => {

  return (
    <div className="home">
      <div className="home__users">
        <div className="desc">
          <h1 className="desc__heading">Random people finder</h1>
          <p className="desc__paragraph">Finding great friends isn't easy, and it doesn't have to be. With Random User, you can connect with people all over the world for no cost. Random Users is the best place to find new friends all around the world. Join now!</p>
          <button className="desc__cta">Get started</button>
          <h2 className="home--users__heading">Random friend finder</h2>
          <p className="home--users__text">Find new friends from every country and every race of the world</p>
          <div className="home--users__img">
            <Avatar image={FirstFemale} alt="Female One" className="img" style={{}}/>
            <Avatar image={SecondFemale} alt="Female Two" className="img" style={{}}/>
            <Avatar image={FirstMale} alt="Male One" className="img" style={{}}/>
            <Avatar image={ThirdFemale} alt="Female Three" className="img" style={{}}/>
            <Avatar image={SecondMale} alt="Male Two" className="img" style={{}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


