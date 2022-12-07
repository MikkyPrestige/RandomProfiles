// LAYOUT COMPONENT - This component is for the App Layout that displays the Navigation bar in the app UI to the user when app is open

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/layout.css";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: 'none' }
      }
      to={to}
      end
      {...props}
    />
  );
};


const Layout = () => {

  return (
    <nav className="layout">
      <div className="app-header">
        <h1>RanDomPeopleApp</h1>
      </div>
      <div className="nav__items">
        <CustomNavLink to="/" className="nav__item">Home</CustomNavLink>
        <CustomNavLink to="profile" className="nav__item">Users</CustomNavLink>
        <CustomNavLink to="about" className="nav__item">About us</CustomNavLink>
        <CustomNavLink to="help" className="nav__item">How it works!!!</CustomNavLink>
      </div>
    </nav>
  );
}

//  Navigate back home button
const Back = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
 };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
      border: "none",
      borderRadius: "1rem",
      padding: ".5rem 1rem",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
      color: isHover ? '#f00' : 'green',
    }

  return(
  <NavLink
    to="/"
    className="back__button"
  >
    <button style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >Go Back ← </button>
  </NavLink>
  );
};

export { Layout, Back };