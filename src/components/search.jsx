// SEARCH COMPONENT - This component is the Search section of the app that displays the searched random users to the app UI.

import { useEffect, useState } from "react";
import "../assets/styles/search.css";

const Search = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then((res) => res.json())
      .then((data) => {
        setSearchedUsers(data.results);
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
      <h1 className="filter__heading">Search For Users</h1>
      <div className="filter__search">
        <input
          type="text"
          placeholder="Search by category"
          className="filter__search__input"
          onChange={handleSearchInput}
        />
        <select
          className="filter__search__input"
          onChange={handleSelectedCategory}
        >
          <option value="">Select a category</option>
          <option value="name">Name</option>
          <option value="full-name">Full Name</option>
          <option value="country">Country</option>
        </select>
      </div>
      <div className="filtered__results">
        <div className="filtered__users">
          {searchedUsers
            .filter((user) => {
              if (searchInput === "" || selectedCategory === "") {
                return null;
              } else if (selectedCategory === "name") {
                return user.name.first
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              } else if (selectedCategory === "full-name") {
                return (
                  user.name.first
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) &&
                  user.name.last
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                );
              } else if (selectedCategory === "age") {
                return user.dob.age.toString().includes(searchInput);
              } else if (selectedCategory === "gender") {
                return user.gender
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              } else if (selectedCategory === "country") {
                return user.location.country
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              } else {
                return null;
              }
            })
            .map((user) => (
              <div className="filtered__users--wrapper" key={user.login.uuid}>
                <div className="filtered__user__img--box">
                  <img
                    src={user.picture.large}
                    alt={user.name.first}
                    className="filtered__user--img"
                  />
                </div>
                <div className="filtered__users__info">
                  <p className="filtered__user__info">
                    <strong>First Name: </strong>
                    {user.name.first}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Last Name: </strong>
                    {user.name.last}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Username: </strong>@{user.login.username}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Email: </strong>
                    {user.email}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Phone: </strong>
                    {user.phone}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Age: </strong>
                    {user.dob.age}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Gender: </strong>
                    {user.gender}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Nationality: </strong>
                    {user.nat}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Country: </strong>
                    {user.location.country}
                  </p>
                  <p className="filtered__user__info">
                    <strong>City: </strong>
                    {user.location.city}
                  </p>
                  <p className="filtered__user__info">
                    <strong>Timezone: </strong>
                    {user.location.timezone.offset}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
