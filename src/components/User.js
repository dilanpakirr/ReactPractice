import PropTypes from "prop-types";
function User(props) {
  return (
    <div>
      {props.isLogged ? props.name : "Giriş Yapmadınız"}
      {props.friends.map((prop, index) => (
        <div key={index}>{prop}</div>
      ))}
    </div>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
};
export default User;
