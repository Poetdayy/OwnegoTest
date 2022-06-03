import React from "react";

const Card = (props) => {
  return (
    <div class="cardItem card">
      <div className="cardItem_name">
        <span>{props.id}</span>
        <span>{props.name}</span>
      </div>
      <div className="cardItem_content">
        <span>Toppings:</span>
        <span>{props.toppings}</span>
      </div>
      <div className="cardItem_price">
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default Card;
