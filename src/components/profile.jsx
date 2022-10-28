// import {  NavLink } from "react-router-dom";

const Profile = () => {
 let data = JSON.parse(localStorage.getItem("users"));  //
   const { picture, name, email, phone, login, location, dob } = data;
 // let imgSrc = picture.medium;
 let fullName = `${name.title} ${name.first} ${name.last}`;
 let Email = email
 let Phone = phone
 let userName = data.login.username

 return (
  <div className="user">
   <figure>
    {/* <img src={imgSrc} alt="user"/> */}
   </figure>
   <h3>{fullName}</h3>
   <h3>@{userName}</h3>
   <h3>{Email}</h3>
   <h3>{Phone}</h3>
   <h3>{location}</h3>
   <h3>{dob}</h3>
   <h3>{login}</h3>
  </div>
 );
};

export default Profile;
