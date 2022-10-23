// import Users from "./users";
import { useEffect, useState } from "react";
import "../assets/styles/home.css";

const Home = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?results=5`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <div className="desc">
        <h1 className="desc__heading">Random people finder</h1>
        <p className="desc__paragraph">Finding great friends isn't easy, and it doesn't have to be. With Random User, you can connect with people all over the world for no cost. Random Users is the best place to find new friends all around the world. Join now!</p>
        <button className="desc__cta">Get started</button>
      </div>
      <div className="users">
        <h2 className="users__heading">Random friend finder</h2>
        <p className="users__text">Find new friends from every country and every race of the world</p>
        <div className="users__wrapper">
          {loading && <h2>Loading...</h2>}
          {error && <h2>{error.message}</h2>}
          {users.map((user) => {
            const { picture, name } = user;
            return (
              <div className="user__img">
                <img src={picture.medium} alt={name.first} className="img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;


