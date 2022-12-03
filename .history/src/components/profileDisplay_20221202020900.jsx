import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../config";

const ProfileDisplay = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt="profile" />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProfileDisplay;