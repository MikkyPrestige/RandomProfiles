// ERROR COMPONENT - This component is the Error section of the app that displays the error message to the user when they navigate to an invalid route in the app

import "../assets/styles/error.css"
import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
  <div className="error__wrapper">
   <h1 className="error__heading" >Error 404</h1>
   <p className="error__text">Page not found</p>

   <Link to="/users" className="desc__cta">Back to USERS</Link>
  </div>
 );
};

export default ErrorPage;