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
        <CustomNavLink to="users" className="nav__item">Users</CustomNavLink>
        <CustomNavLink to="about" className="nav__item">About us</CustomNavLink>
        <CustomNavLink to="help" className="nav__item">How it works!!!</CustomNavLink>
      </div>
    </nav>
  );
}

export default Layout;
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
