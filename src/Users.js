/*==========================================
Setup react-router, implement Nested routes, 404 page, and Error boundary. Set up client-side pagination using randomuser.me API in one of your routes called Users - you should show the prev, next, and navigation to individual pages 1, 2, 3, 4, 5 etc. Implement accessibility and disabled state and API loading states. ============================================ */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);   // useLocation() is a hook that returns the location object that represents the current URL.
}

function Users() {                          // Users component
  const [users, setUsers] = useState([]);    // useState hook to set the state of users
  const [page, setPage] = useState(1);        // useState hook to set the state of page
  const [totalPages, setTotalPages] = useState(0);    // useState hook to set the state of totalPages
  const [loading, setLoading] = useState(false);    // useState hook to set the state of loading
  const [error, setError] = useState(null);       // useState hook to set the state of error
  const query = useQuery();                   // useQuery() is a custom hook that returns the URLSearchParams object that represents the query string of the URL.

  useEffect(() => {                 // useEffect hook to fetch the data from the API
    const page = query.get('page') || 1;     // get the page number from the query string
    setPage(page);                        // set the page number
    setLoading(true);                   // set the loading state to true
    fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)   // fetch the data from the API
      .then((res) => res.json())          // convert the response to JSON
      .then((data) => {                  // if the data is fetched successfully
        setUsers(data.results);          // set the users state
        setTotalPages(data.info.page);     // set the totalPages state
        setLoading(false);                // set the loading state to false
      })
      .catch((err) => {                   // if there is an error
        setError(err);                   // set the error state
        setLoading(false);               // set the loading state to false
      });
  }, [query]);                           // useEffect hook will run when the query changes

  if (loading) {                      // if the loading state is true
    return <div>Loading...</div>;      // return Loading...
  }

  if (error) {                          // if there is an error
    return <div>Error: {error.message}</div>;  // return the error message
  }

  if (!users.length) {                  // if there are no users
    return <div>No users found</div>;    // return No users found
  }

  if (totalPages < page) {              // if the page number is greater than the total number of pages
    return <div>Page not found</div>;    // return Page not found
  }

  if (page < 1) {                      // if the page number is less than 1
    return <div>Page not found</div>;    // return Page not found
  }


  return (                            // return the users
    <div className='App'>
      <header className="App-header">
        <h1>ASSIGNMENT 2</h1>
      </header>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (                                      // map through the users
          <li key={user.login.uuid}>                               {/* set the key to the user id */}
            {/* link to the user details page */}
            <Link to={`/users/${user.login.uuid}`}>{user.name.first}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.name.last}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.email}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.phone}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.dob.age}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.picture.medium}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.city}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.state}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.country}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.postcode}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.street.name}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.street.number}</Link>
            <Link to={`/users/${user.login.uuid}`}>{user.location.timezone.offset}</Link>
          </li>
        ))}
      </ul>
      <div>
        {page > 1 && (                                                 // if the page is greater than 1
          <Link to={`/users?page=${parseInt(page) - 1}`}>Prev</Link>  // link to the previous page
        )}
        {page < totalPages && (                 // if the page is less than the total number of pages
          <Link to={`/users?page=${parseInt(page) + 1}`}>Next</Link>  // link to the next page
        )}
      </div>
    </div>
  );
}

// function User({match}) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://randomuser.me/api/?seed=abc&results=1&id=${match.params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data.results[0]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   }, [match.params.id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <div>
//       <h1>{user.name.first}</h1>
//       <img src={user.picture.large} alt={user.name.first} />
//     </div>
//   );
// }

export default Users;          // export the Users component
