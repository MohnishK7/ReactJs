import PropTypes from "prop-types"; // Import PropTypes

function Card(props) {
  return (
    <div className="cards">
      <img
        className="card-img"
        src={props.imageSrc} // Use props.imageSrc as the image source
        alt="profilepic"
      ></img>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-text">{props.title}</p>
    </div>
  );
}

// PropTypes validation
Card.propTypes = {
  name: PropTypes.string.isRequired, // name prop is required and must be a string
  title: PropTypes.string.isRequired, // title prop is required and must be a string
  imageSrc: PropTypes.string.isRequired, 
};

export default Card;

// function Card() {
//   return (
//     <div className="cards">
//       <img
//         className="card-img"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvRFkGvTCnWKTp010CB419AFy5SVRVQt9KfYtEcSC3Q&s"
//         alt="profilepic"
//       ></img>
//       <h2 className="card-title">Albert Einstein</h2>
//       <p className="card-text">Hi i am a theoretical physicist</p>
//     </div>
//   );
// }

// export default Card;
