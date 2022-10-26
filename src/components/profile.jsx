import { Link, Outlet } from "react-router-dom";

const Profile = () => {
 return (
  <div className="">
   <Link to="userDetails"><strong>Profile: </strong>View</Link>

   <Outlet />
  </div>
 );
}

export default Profile;