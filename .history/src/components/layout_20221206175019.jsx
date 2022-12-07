// LAYOUT COMPONENT - This component is for the App Layout that displays the Navigation bar in the app UI to the user when app is open

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/layout.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Layout = () => {
  return (
    <div>
      <LayoutSmall />
      <LayoutLarge />
    </div>
  );
};

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      to={to}
      end
      {...props}
    />
  );
};

const LayoutSmall = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="layout small">
      <header className="layout__header">
        <div className="layout__header--text">
          <h1 className="layout__header--title">RanDomPeopleApp</h1>
        </div>
        <nav className="layout__nav">
          <button onClick={toggleNav} className="layout--btn">
            {nav ? (
              <MdClose className="layout--btn--icon" />
            ) : (
              <FiMenu className="layout--btn--icon" />
            )}
          </button>
          <div className={`menuNav ${nav ? " showMenu" : ""}`}>
            <CustomNavLink
              to="/"
              end
              className="nav__item"
              onClick={() => closeNav()}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              to="profile"
              className="nav__item"
              onClick={() => closeNav()}
            >
              Users
            </CustomNavLink>
            <CustomNavLink
              to="about"
              className="nav__item"
              onClick={() => closeNav()}
            >
              About
            </CustomNavLink>
            <CustomNavLink
              to="help"
              className="nav__item"
              onClick={() => closeNav()}
            >
              Features
            </CustomNavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <div className="layout large">
      <header className="layout__header">
        <div className="layout__header--text">
          <h1 className="layout__header--title">RanDomPeopleApp</h1>
        </div>
        <nav className="layout__nav">
          <div className="nav__items--large">
            <CustomNavLink to="/" className="nav__item--large">
              Home
            </CustomNavLink>
            <CustomNavLink to="profile" className="nav__item--large">
              Users
            </CustomNavLink>
            <CustomNavLink to="about" className="nav__item--large">
              About
            </CustomNavLink>
            <CustomNavLink to="help" className="nav__item--large">
              Features
            </CustomNavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

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
    borderRadius: ".5rem",
    padding: " .5rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
    color: isHover ? "#f00" : "green",
  };

  return (
    <NavLink to="/" className="back__button">
      <button
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Back ←{" "}
      </button>
    </NavLink>
  );
};

export { Layout, Back };
