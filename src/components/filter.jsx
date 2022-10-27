
import { useEffect, useState } from "react";
// import "../assets/styles/filter.css";

const Filter = () => {    
 const [homeUsers, setHomeUsers] = useState([]);
 const [load, setLoad] = useState(false);
 const [errorMessage, setErrorMessage] = useState(null);
 const [searchInput, setSearchInput] = useState("");  
 const [selectedCategory, setSelectedCategory] = useState("");

 useEffect(() => {
  setLoad(true);
  fetch(`https://randomuser.me/api/?results=3`)
   .then((res) => res.json())
   .then((data) => {
    setHomeUsers(data.results);
    setLoad(false);
   })
   .catch((err) => {
    setErrorMessage(err);
    setLoad(false);
   });
 }, [searchInput]);

 const handleSearchInput = (e) => {
  setSearchInput(e.target.value);  
 };

 const handleSelectedCategory = (e) => {
  setSelectedCategory(e.target.value); 
 };

 return (
  <div className="filter">
   <div className="filter__search">
    <input type="text" placeholder="Search by name" className="filter__search__input" onChange={handleSearchInput} />
    <select className="filter__search__select" onChange={handleSelectedCategory}>
     <option value="">Select a category</option>
     <option value="name">Name</option>
     <option value="full-name">Full Name</option>
     <option value="email">Gender</option>
     <option value="age">Age</option>
     <option value="country">Country</option>
    </select>
   </div>
   {load ? (
    <div className="loading">Loading...</div>
   ) : errorMessage ? (
    <div className="error">{errorMessage}</div>
   ) : (
      <div className="filter__users">
       {homeUsers
        .filter((user) => {
         if (searchInput === "" || selectedCategory === "") {
          return null;
         } else if (selectedCategory === "name") {
          return user.name.first.toLowerCase().includes(searchInput.toLowerCase());
         } else if (selectedCategory === "full-name") {
          return user.name.first.toLowerCase().includes(searchInput.toLowerCase()) && user.name.last.toLowerCase().includes(searchInput.toLowerCase());
         } else if (selectedCategory === "age") {
          return user.dob.age.toString().includes(searchInput);
         } else if (selectedCategory === "gender") {
          return user.gender.toLowerCase().includes(searchInput.toLowerCase());
         } else if (selectedCategory === "country") {    
          return user.location.country.toLowerCase().includes(searchInput.toLowerCase());
         } else {
          return null;
         }
        })
        .map((user) => (
         <div className="filter__users__user" key={user.login.uuid}>
          <div className="filter__users__user__img">
           <img src={user.picture.thumbnail} alt={user.name.first} />
          </div>
          <div className="filter__users__user__info">
           <div className="filter__users__user__info__name">
            <span className="filter__users__user__info__name__first">{user.name.first}</span>
            <span className="filter__users__user__info__name__last">{user.name.last}</span>
           </div>
           {/* <div className="filter__users__user__info__email">{user.email}</div> */}
           {/* <div className="filter__users__user__info__phone">{user.phone}</div> */}
           <div className="filter__users__user__info__age">{user.dob.age}</div>
           {/* <div className="filter__users__user__info__national">{user.nat}</div> */}
           {/* <div className="filter__users__user__info__country">{user.location.country}</div> */}
           {/* <div className="filter__users__user__info__location">{user.location.city}</div> */}
           {/* <div className="filter__users__user__info__timezone">{user.location.timezone.offset}</div> */}
          </div>
         </div>
        ))}
    </div>
   )}
  </div>
 );
};

export default Filter;