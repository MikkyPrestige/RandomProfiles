// Create a new component called UserDetails that will render the person full profile data gotten from the API call made in users component and will be rendered when a user clicks on a person profile link in the users component  
import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = (Users) => {
 // const { user } = props.location.state;  // Get the user data from the state passed from the users component
 // const user = JSON.parse(localStorage.getItem('users')); // Get the user data from the local storage set in the users component 

 return (
  <div className="user-details">
   <h1>Profile Details</h1>
   <div className="user-details__profile">
    <div className="user-details__profile__image">
     {/* <img src={Users.picture.medium} alt={Users.name.first} /> */}
    </div>
    <div className="user-details__profile__info">
     <h2>{Users.name.first} {Users.name.last}</h2>
     <p>{Users.email}</p>
     <p>{Users.phone}</p>
     <p>{Users.location.street.number} {Users.location.street.name}, {Users.location.city}, {Users.location.state}, {Users.location.country}</p>
     <p>{Users.dob.age} years old</p>
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
