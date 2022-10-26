// Create a new component called UserDetails that will render the person full profile data gotten from the API call made in users component and will be rendered when a user clicks on a person profile link in the users component  
import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
 // const { user } = props.location.state;  // Get the user data from the state passed from the users component
 const user = JSON.parse(localStorage.getItem('users')); // Get the user data from the local storage set in the users component 

 return (
  <div className="user-details">
   <h1>Profile Details</h1>
   <div className="user-details__profile">
    <div className="user-details__profile__image">
     <img src={user.picture.large} alt={user.name.first} />
    </div>
    <div className="user-details__profile__info">
     <h2>{user.name.first} {user.name.last}</h2>
     <p>{user.email}</p>
     <p>{user.phone}</p>
     <p>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}</p>
     <p>{user.dob.age} years old</p>
    </div>
   </div>
   <Link to="/">Back to Users</Link>
  </div>
 );
}

export default UserDetails;


// const users = JSON.parse(localStorage.getItem("users"));  // Get the users data from the local storage and parse it to JSON format
//     if (users) {  // If the users data is available in the local storage then set the users state to the users data gotten from the local storage
//       this.setState({ users });
// } else {   // If the users data is not available in the local storage then make an API call to get the users data and set the users state to the users data gotten from the API call
//       this.fetchUsers();
// } 
