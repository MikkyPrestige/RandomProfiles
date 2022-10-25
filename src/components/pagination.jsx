// import { useState } from 'react';
// import useFetch from './useFetch';

// const User = () => {
//  const [page, setPage] = useState(1);
//  const { loading, error, data } = useFetch(
//   `https://randomuser.me/api/?page=${page}&results=12&seed=abc`
//  );

//  // console.log({ loading, error, data });
//  const pages = 10;
//  // const users = data?.results;

//  if (loading) {
//   return <>Loading...</>;
//  }

//  if (!loading && error) {
//   return <>Error</>;
//  }

//  return (
//   <div className="users">
//    <h1 className="users__heading">Random Users found</h1>

//    <div className="users__list">
//     {data?.results.map((user) => {
//      const { name, gender, nat, location, login, email, dob, phone, picture } = user;
//      return (
//       <li className="users__container__user" key={user.value}>
//        <img src={picture.large} alt={name.first} className="user__img" />
//        <p className="user__item"><strong>Name: </strong>{name.title}, {name.first} {name.last}</p>
//        <p className="user__item"><strong>Gender: </strong>{gender}</p>
//        <p className="user__item"><strong>Username: </strong>{login.username}</p>
//        <p className="user__item"><strong>Age: </strong> {dob.age}</p>
//        <p className="user__item"><strong>Email: </strong>{email}</p>
//        <p className="user__item"><strong>Phone: </strong>{phone}</p>
//        <p className="user__item"><strong>Nationality: </strong>{nat}</p>
//        <p className="user__item"><strong>Location: </strong>{location.city}, {location.state}, {location.country}, {location.postcode}</p>
//        <p className="user__item"><strong>Time-zone: </strong>{location.timezone.offset}, {location.timezone.description}</p>
//       </li>
//      );
//     })}
//    </div>
//    {
//     <button
//      disabled={page <= 1}
//      onClick={() => setPage((prev) => prev - 1)}
//     >
//      prev
//     </button>
//    }
//    <p className="pagination">
//     Pages: {page} of {pages}
//    </p>
//    {
//     <button
//      disabled={page >= pages}
//      aria-disabled={page >= pages}
//      onClick={() => setPage((prev) => prev + 1)}
//     >
//      next
//     </button>
//    }
//    {/* another magic here */}
//    {Array.from({ length: pages }, (value, index) => index + 1).map(
//     (each) => (
//      <button onClick={() => setPage(each)}>{each}</button>
//     )
//    )}
//   </div>
//  );
// }

// export default User;
