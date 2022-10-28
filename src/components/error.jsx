import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
  <div>
   <h1>Error 404</h1>
   <p>Page not found</p>

   <Link to="/">Back to Home</Link>
  </div>
 );
};

export default ErrorPage;