import { NavLink } from "react-router-dom";
import "../assets/styles/layout.css";

const NavList = () => {
  let activeStyle = {   // this is the style that will be applied when the link is active
    textDecoration: 'none'
  };

  let activeClassName = "active";

  return (
    <nav className="layout">
      <div className="app-header">
        <h1>RanDomUsersApp</h1>
      </div>
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : {}} >Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/users" style={({ isActive }) => isActive ? activeClassName : { textDecoration: 'none' }}>Users</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" style={({ isActive }) => isActive ? activeClassName : { textDecoration: 'none' }}>About Us</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/help" style={({ isActive }) => isActive ? activeClassName : { textDecoration: 'none' }}>How it works</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
//       to={to}              // this is the path to which the link will navigate
//       end         // this is a boolean that indicates whether the link should be active when the location is matched exactly or not
//       {...props} />   // this is the props that will be passed to the NavLink component
//   );
// }


// const Layout = () => {
//   return (
//     <div className="layout">
//       <header className="app-header">
//         <h1>RanDomUsersApp</h1>
//       </header>
//       <nav className="navigation">
//         <CustomNavLink to="/" className="nav__item">Home</CustomNavLink>
//         <CustomNavLink to="./users" className="nav__item">Users</CustomNavLink>
//         <CustomNavLink to="about" className="nav__item">About Us</CustomNavLink>
//         <CustomNavLink to="help" className="nav__item">How it works</CustomNavLink>
//       </nav>
//     </div>
//   );
// }

// export default Layout;
