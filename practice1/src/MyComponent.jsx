//onChange = event handler used primarly with form elements
// example => <input>, <select> , <radio>, <textarea>
//Triggers a function every time the value of the input changes
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQunatity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQunatity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePayementChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter your comment"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePayementChange}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>shipping: {shipping}</p>
    </div>
  );
}
export default MyComponent;
