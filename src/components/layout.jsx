import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {   // this is the style that will be applied when the link is active
    color: 'red',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <NavLink
      style={({ isActive }) => isActive ? activeStyle : { textDecoration: 'none' }}  // this is the style that will be applied when the link is not active
      to={to}              // this is the path to which the link will navigate
      end         // this is a boolean that indicates whether the link should be active when the location is matched exactly or not  
      {...props} />   // this is the props that will be passed to the NavLink component  
  );
}


const Layout = () => {
  return (
    <nav>
      <h1>Random Users App</h1>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="users">Users</CustomNavLink>
    </nav>
  );
}

export default Layout;
