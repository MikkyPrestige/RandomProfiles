// HELP SECTION COMPONENT - This component is the help section of the app that displays the help text to the user when they click on the 'HOW IT WORKS' button in the header. This component is a functional component that uses the useState hook to set the state of the help text. The help text is then displayed to the user in the return statement.

import { useState } from "react";
import "../assets/styles/help.css";

const Help = () => {
 const [helpText] = useState(
  <ul className="help__list">
   <div className="help__text">
    This app uses a Random User Generator API to fetch a list of random People. The people are displayed in the app UI. The list can be filtered.
   </div>
   <li className="help__item"> User can click on a random person's profile to see more details about their profile.</li>
   <li className="help__item">User can also click on the 'PEOPLE' button in the header to see the random people's page.</li>
   <li className="help__item">User can also click on the 'HOW IT WORKS' button in the header to see the help text.</li>
   <li className="help__item">User can also click on the 'SEARCH' button in the header to see the search page.</li>
   <li className="help__item">User can also click on the 'HOME' button in the header to go back to the home page.</li>
  </ul>
 );
 // setHelpText(helpText);

 return (
  <div className="help">
   <h1 className="help__heading">HOW IT WORKS!!!</h1>
   {helpText}
  </div>
 );
};

export default Help;
