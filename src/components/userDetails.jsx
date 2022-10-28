
// import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
// Get the user data from the state passed from the users component stored in the local storage set in the users component
// const user = JSON.parse(localStorage.getItem('users'));
// const handleProfileClick = useCallback(() => { // 1. Create a function called handleProfileClick that will be called when the user clicks on the profile link
//  onProfileClick(user);   // 2. Call the onProfileClick function that was passed from the users component and pass the user data to it
// }, [user, onProfileClick]);  // 3. Add the user data and the onProfileClick function to the dependency array of the handleProfileClick function

const UserDetails = (props) => {
 const user = JSON.parse(localStorage.getItem('users')); // Get the user data from the local storage set in the users component
 return (
  <div className="user__details">
   <h1 className="user__details__heading">User Details</h1>
   <div className="user__details__container">
    <div className="user__details__img">
     <img src={user.picture.medium} alt="User" />
    </div>
    <div className="user__details__info">
     <h2 className="user__details__info__name">{user.name.first} {user.name.last}</h2>
     <p className="user__details__info__email">{user.email}</p>
     <p className="user__details__info__phone">{user.phone}</p>
     <p className="user__details__info__location">{user.location.city}, {user.location.country}</p>
     <Link to="/users" className="user__details__info__link">Back to users</Link>
    </div>
   </div>
  </div>
 );
}


export default UserDetails;

