// import PropTypes from "prop-types"; // Import PropTypes

// function UserGreeting(props) {
//   const welcomeMessage = (
//     <h2 className="welcome-msg">Welcome {props.username}</h2>
//   );
//   const exitMessage = <h2 className="exit-msg">Please log in continue</h2>;

//   return props.isLoggedIn ? welcomeMessage : exitMessage;
//   //   if (props.isLoggedIn) {
//   //     return <h2 className="welcome-msg">Welcome {props.username}</h2>;
//   //   } else {
//   //     return <h2 className="exit-msg">Please log in continue</h2>;
//   //   }
// }
// // PropTypes validation
// UserGreeting.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn prop is required and must be a boolean
//   username: PropTypes.string, // username prop is optional and must be a string if provided
// };
// // this will give welcome gurst as there is no username
// UserGreeting.defaultProps = { isLoggedIn: false, username: "Guest" };

// export default UserGreeting;
