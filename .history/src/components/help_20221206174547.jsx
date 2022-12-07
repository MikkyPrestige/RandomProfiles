// HELP COMPONENT - This component is the Help section of the app that displays the help text to the user when they click on the 'HOW IT WORKS' button in the header.

import "../assets/styles/help.css";
import { Back } from "./layout";

const Help = () => {
  return (
    <div>
      <div className="help">
        <h1 className="help__heading">HOW IT WORKS!!!</h1>
        <ul className="help__list">
          <h2 className="help__text">
            This app uses a Random User Generator API to fetch a list of random
            People. The people are displayed in the app UI. The list can be
            filtered.
          </h2>
          <li className="help__item">
            Click on 'Go to Profile' in home page to sign in to your account or
            register
          </li>
          <li className="help__item">
            Click on the 'USERS' in the header to see the random users in the
            app
          </li>
          <li className="help__item">
            Click on the 'FEATURES' in the header to see the help text.
          </li>
          {/* <li className="help__item">
            Click on the 'SEARCH' tab in the header to search for
            Users with letters from their names or other criteria{" "}
          </li> */}
          {/* <li className="help__item">
            Click on the 'HOME' button in the header to go back to
            the home page.
          </li> */}
        </ul>
        <Back />
      </div>
    </div>
  );
};

export default Help;
