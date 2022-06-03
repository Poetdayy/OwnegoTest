import React from "react";

const Card = (props) => {
  return (
    <div class="cardItem card">
      <div className="cardItem_name">
        <span>MT-0{props.id}</span>
        <br />
        <span class="fw-bold">{props.name}</span>
      </div>
      <div className="cardItem_content">
        <span class="fw-bold">Toppings:</span>
        <br />
        <span>{props.toppings}</span>
      </div>
      <div className="cardItem_price fw-bold float-right">
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default Card;
