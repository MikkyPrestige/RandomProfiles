
const Avatar = ({ image = "", alt = "", style = { width: '7rem', height: '7rem', borderRadius: '50%' } }) => {
 return (
  <div className="avatar">
   <img src={image} alt={alt} style={style} />
  </div>
 );
}

export default Avatar;
