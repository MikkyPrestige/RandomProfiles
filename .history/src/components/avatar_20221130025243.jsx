// AVATAR COMPONENT - This component is for the Images used in the app.

import "../assets/styles/layout.css";

export const Avatar = ({ image = "", alt = "", style = {}}) => {
  return (
    <div className="avatar">
      <img src={image} alt={alt} style={style} />
    </div>
  );
}


// FOOTER COMPONENT - for the attribution

export const Footer = () => {
  return (
    <div className="attribution">
      <footer>&copy;<a href="https://github.com/MeekyBerry" target="_blank" rel="noreferrer" className="footer">meeky/2022</a></footer>
    </div>
  )
}