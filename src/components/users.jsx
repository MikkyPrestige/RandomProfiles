/*==========================================
Set up client-side pagination using randomuser.me API in one of your routes called Users - you should show the prev, next, and navigation to individual pages 1, 2, 3, 4, 5 etc. Implement accessibility and disabled state and API loading states. ============================================ */
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./profile";
// import Filter from "./filter";
import "../assets/styles/users.css";

const Users = () => {  // 1. Create a component called Users
  const [users, setUsers] = useState([]);  // 2. Create a state variable called users and set it to an empty array
  const [page, setPage] = useState(1);   // 3. Create a state variable called page and set it to 1
  const [loading, setLoading] = useState(false);  // 4. Create a state variable called loading and set it to false
  const [error, setError] = useState(null);   // 5. Create a state variable called error and set it to null
  const [pages] = useState(10);  // 6. Create a state variable called pages and set it to 10

  useEffect(() => {   // 6. Create a useEffect hook that will fetch the users from the API
    setLoading(true);    // 7. Set the loading state variable to true before the API call is made  
    fetch(`https://randomuser.me/api/?page=${page}&results=12`)   // 8. Fetch the users from the API using the page state variable to determine the page number to fetch from the API  
      .then((response) => response.json())  // 9. Convert the response to JSON 
      .then((data) => {    // 10. Use the data from the API call to set the users state variable to the results from the API call  
        setUsers(data.results);  // 10. Set the users state variable to the data returned from the API call 
        setLoading(false);   // 11. Set the loading state variable to false after the API call is made  
      })
      .catch((err) => {   // 12. Catch any errors that may occur during the API call and set the error state variable to the error message
        setError(err);   // 12. Set the error state variable to the error message
        setLoading(false);   // 13. Set the loading state variable to false after the API call is made
      });
  }, [page]);  // 14. Add the page state variable to the dependency array so that the useEffect hook will run when the page state variable changes 
  localStorage.setItem("user", JSON.stringify(users));  // 15. Store the users state variable in local storage called user so that it can be accessed by the UserDetails component 

  return (  // 17. Return the users state variable to the UI
    <div className="users">
      <h1 className="users__heading">Random People found</h1>
      <div className="top__btn">
        <button className="cta active"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}>Prev</button>  {/* 18. Create a button that will decrease the page state variable by 1 when clicked and disable the button if the page state variable is 1 */}
        <span className="page__num">{page}</span>  {/* 19. Display the page state variable */}
        <button className="cta active"
          onClick={() => setPage((prevPage) => (!users.length ? prevPage : prevPage + 1))}
          disabled={!users.length}>Next</button> {/* 20. Create a button that will increase the page state variable by 1 when clicked and disable the button if the users state variable is empty*/}
      </div>
      <ul className="users__list">  {/* 21. Create a list of users returned from the API call */}
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {users.map((user) => {   // 22. Map over the users state variable and return the user's name, email, and phone number to the UI 
          const { name, gender, nat, login, dob, picture } = user; // 23. Destructure the user object to get the login, name, picture etc properties  
          return (
            <li key={login.uuid} className="user__items">  {/* 24. Create a list item for each user returned from the API call */}
              <img src={picture.large} alt={name.first} className="user__img" /> {/* 25. Display the user's picture */}
              <p className="user__item"><strong>Name: </strong>{name.title}, {name.first} {name.last}</p> {/* 26. Display the user's first and last name */}
              <p className="user__item"><strong>Gender: </strong>{gender}</p>
              <p className="user__item"><strong>Age: </strong> {dob.age}</p>
              <p className="user__item"><strong>Nationality: </strong>{nat}</p>
              {/* // 27. Display the user's profile component when the user's name is clicked  */}
              <Profile user={user} />
              {/* <Link to={`userDetails/${user}`}>View Profile</Link>  */}
              <Outlet />
            </li>
          );
        })}
      </ul>
      <div className="bottom__btn">
        {
          <button className="btn active"
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}> prev </button>}
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button className="btn__array active" onClick={() => setPage(each)}>{each}</button>
          )
        )}
        {
          <button className="btn"
            disabled={page >= pages}
            aria-disabled={page >= pages}  //
            onClick={() => setPage((prev) => prev + 1)}> next </button>}
      </div>
      <p className="pagination"> Pages: {page} of {pages}  </p>
    </div>
  );
}

export default Users;  // 29. Export the Users component
