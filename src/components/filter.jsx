// FILTER COMPONENT - FILTERS THE LIST OF USERS BASED ON THE SEARCH INPUT AND THE SELECTED CATEGORY
//  This component is a functional component that uses the useState hook to set the state of the search input and the selected category. The search input and the selected category are then used to filter the list of users. The filtered list of users is then displayed to the user in the return statement. The filtered list of users is also passed to the Users component as a prop. The Users component then displays the filtered list of users.
// the filtered list of users is passed to the Users component as a prop
// the Users component then displays the filtered list of users


import { useState } from "react";
// import "../assets/styles/filter.css";

const Filter = ({ users, setUsers }) => {   // 1. Create a component called Filter and pass the users state variable and the setUsers state variable as props to the component 
 // users = [];
 // setUsers = []; // 2. Create a state variable called users and set it to an empty array
 const [searchInput, setSearchInput] = useState("");  
 const [selectedCategory, setSelectedCategory] = useState("");

 const handleSearchInput = (e) => {
  setSearchInput(e.target.value);  // 3. Set the searchInput state variable to the value of the search input
 };

 const handleSelectedCategory = (e) => {
  setSelectedCategory(e.target.value); // 4. Set the selectedCategory state variable to the value of the selected category
 };

  const filteredUsers = users.filter((user) => {  // 5. Filter the list of users based on the search input and the selected category
  const { name,  gender, picture, dob, nat, location } = user;
  let userFullName = `${name.first} ${name.last}`.toLowerCase();
  let singleName = name.first.toLowerCase() || name.last.toLowerCase();
  let searchInputLowerCase = searchInput.toLowerCase();
  
  if (selectedCategory === "full-name") {  // 6. If the selected category is name, filter the list of users based on the search input and the name of the user  
   return userFullName.toLowerCase().includes(searchInputLowerCase); // 7. If the search input is included in the name of the user, return the user 
  } else if (selectedCategory === "name") {
   return singleName.includes(searchInputLowerCase);  
  } else if (selectedCategory === "gender") {
   return gender.toLowerCase().includes(searchInputLowerCase);
  } else if (selectedCategory === "picture") {
   return picture.large.includes(searchInputLowerCase);
  } else if (selectedCategory === "age") {
   return dob.age.toLowerCase().includes(searchInputLowerCase);
  } else if (selectedCategory === "nationality") {
   return nat.toLowerCase().includes(searchInputLowerCase);
  } else if (selectedCategory === "country") {
   return location.country.toLowerCase().includes(searchInputLowerCase);
  } else if (selectedCategory === "location") {
   return location.city && user.location.state && user.location.postcode.toLowerCase().includes(searchInputLowerCase);
  } else if (selectedCategory === "timezone") {
   return location.timezone.offset.toLowerCase().includes(searchInputLowerCase);
  } else {
   return "Select Category and Search Input to Filter the List of Users";  
  }
 });

 setUsers(filteredUsers);  // 10. Set the users state variable to the filtered list of users
 
 return (  
  <div className="filter">
   <h1 className="filter__heading">Search by category</h1>
   <input
    className="filter__input"
    type="text"
    placeholder="Search..."
    value={searchInput}
    onChange={handleSearchInput}
   />  
   <select
    className="filter__select"
    value={selectedCategory}
    onChange={handleSelectedCategory}
   >  
    <option value="name">Name</option>
    <option value="full-name">Full Name</option>
    <option value="email">Gender</option>
    <option value="phone">Picture</option>
    <option value="age">Age</option>
    <option value="nationality">Nationality</option>
    <option value="country">Country</option>
    <option value="location">Location</option>
    <option value="timezone">Time-zone</option>
   </select>
  </div>
 );
}

export default Filter;