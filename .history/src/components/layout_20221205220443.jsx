// LAYOUT COMPONENT - This component is for the App Layout that displays the Navigation bar in the app UI to the user when app is open

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

  return(
  <NavLink
    to="/"
    className="back__button"
  >
    <button style={{
      backgroundColor: 'transparent',
      border: 'none',
    }}>Back</button>
  </NavLink>
  );
};

export { Layout, Back };