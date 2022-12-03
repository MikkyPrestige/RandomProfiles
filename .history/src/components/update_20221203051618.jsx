// update password component

import { auth, onAuthStateChanged, updatePassword } from "../config";
import { useEffect, useState } from "react";

const UpdatePassword = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    
    updatePassword(auth.currentUser, password)
      .then(() => {
        // Password updated!
        console.log("Password updated!");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters");
        }
        if (confirmPassword !== password) {
          setError("Passwords do not match!");
        }
        console.error(error);
      });
  };

  return (
    <div className="update__container">
      <h2 className="update__title">Update Password</h2>
      <form onSubmit={handleUpdatePassword} className="update__form">
        <div className="update__group">
          <label htmlFor="password" className="update__label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="update__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="update__group">
          <label htmlFor="confirmPassword" className="update__label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="update__input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="update__group">
          <button type="submit" className="update__button">
            Update Password
          </button>
        </div>
      </form>
      <div className="update__error">{error}</div>
    </div>
  );
}

export default UpdatePassword;
