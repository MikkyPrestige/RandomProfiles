
// import { Link } from 'react-router-dom';
import Profile from './profile';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
 // const Users = JSON.parse(localStorage.getItem("setUsers"));  // 
 // let { id } = useParams();  // Get the id from the url
 // let index = Number(id);  // Get the user data from the users array using the id 
 // let currentUser = Users[index - 1];  // Get the user data from the users array using the id 
 // let imgSrc = currentUser.picture.medium;  // Get the user image from the user data
 // let fullName = `${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`;  // Get the user full name from the user data
 // let email = currentUser.email;  // Get the user email from the user data
 // let phone = currentUser.phone;  // Get the user phone number from the user data
 // let userName = currentUser.login.username;  // Get the user username from the user data
 // let location = `${currentUser.location.street.number} ${currentUser.location.street.name}, ${currentUser.location.city}, ${currentUser.location.state}, ${currentUser.location.country}, ${currentUser.location.postcode}`;  // Get the user location from the user data
 // let age = currentUser.dob.age;  // Get the user age from the user data

 return (
 
  <Profile />
  // <div className="user">
  //   { 
  //   Number(index) + 1 > 1 ?  // If the id is greater than 1 then display the previous user link
  //   <Link to={`${Number(index) - 1}`} > Previous user </Link> : null
  //   }
  //  <h1>User Full Details</h1>
  //  <figure>
  //   <img src={imgSrc} alt="user" />
  //  </figure>
  //  <h3>{fullName}</h3>
  //  <h3>@{userName}</h3>
  //  <h3>{email}</h3>
  //  <h3>{phone}</h3>
  //  <h3>{location}</h3>
  //  <h3>{age}</h3>
  // </div>
 );
}


export default UserDetails;

