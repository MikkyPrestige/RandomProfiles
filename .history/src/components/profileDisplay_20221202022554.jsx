import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../config";
import { Avatar } from "./avatar";

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="profile__title">Profile Display</h1>
      {user ? (
        <div>
          <Avatar image={user.photoURL} style={{ width: "10rem", height: "10rem", borderRadius: "50%" }} />
          <p className="profile__detail">
                <strong>Signed in account name: </strong>
                {user.displayName}
              </p>
              <p className="profile__detail">
                <strong>Signed in email: </strong>
                {user.email}
              </p>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;