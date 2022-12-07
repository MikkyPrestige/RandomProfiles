// LAYOUT COMPONENT - This component is for the App Layout that displays the Navigation bar in the app UI to the user when app is open

import { useState } from "react";
import {  NavLink } from "react-router-dom";
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
    <nav className="layout__nav">
      <div className="app-header">
        <h1>RanDomPeopleApp</h1>
      </div>
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
          About Us
        </CustomNavLink>
        <CustomNavLink
          to="help"
          className="nav__item"
          onClick={() => closeNav()}
        >
          How it works
        </CustomNavLink>
      </div>
    </nav>
    </div>
  );
};

const LayoutLarge = () => {
  return (
    <div className="layout large">
    <nav className="layout__nav">
      <div className="nav__items--large">
        <CustomNavLink to="/" className="nav__item--large">
          Home
        </CustomNavLink>
        <CustomNavLink to="profile" className="nav__item--large">
          Users
        </CustomNavLink>
        <CustomNavLink to="about" className="nav__item--large">
          About us
        </CustomNavLink>
        <CustomNavLink to="help" className="nav__item--large">
          How it works
        </CustomNavLink>
      </div>
    </nav>
    </div>
  );
};

// const Layout = () => {
//   return (
//     <nav className="layout">
//       <div className="app-header">
//         <h1>RanDomPeopleApp</h1>
//       </div>
//       <div className="nav__items">
//         <CustomNavLink to="/" className="nav__item">
//           Home
//         </CustomNavLink>
//         <CustomNavLink to="profile" className="nav__item">
//           Users
//         </CustomNavLink>
//         <CustomNavLink to="about" className="nav__item">
//           About us
//         </CustomNavLink>
//         <CustomNavLink to="help" className="nav__item">
//           How it works!!!
//         </CustomNavLink>
//       </div>
//     </nav>
//   );
// };

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
        Go Back ←{" "}
      </button>
    </NavLink>
  );
};

export { Layout, Back };
