// HELP COMPONENT - This component is the Help section of the app that displays the help text to the user when they click on the 'HOW IT WORKS' button in the header.

import "../assets/styles/help.css";

const Help = () => {

 return (
  <div className="help">
   <h1 className="help__heading">HOW IT WORKS!!!</h1>
   <ul className="help__list">
    <div className="help__text">
     This app uses a Random User Generator API to fetch a list of random People. The people are displayed in the app UI. The list can be filtered.
    </div>
    <li className="help__item"> User can click on a random person's profile to see more details about their profile.</li>
    <li className="help__item">User can also click on the 'USERS' in the header to see the random people's page.</li>
    <li className="help__item">User can also click on the 'HOW IT WORKS' in the header to see the help text.</li>
    <li className="help__item">User can also click on the 'SEARCH' tab in the header to search for Users with letters from their names or other criteria </li>
    <li className="help__item">User can also click on the 'HOME' button in the header to go back to the home page.</li>
   </ul>
  </div>
 );
};

export default Help;
