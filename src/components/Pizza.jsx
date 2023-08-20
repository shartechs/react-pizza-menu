import React from "react";

export default function Pizza({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) {
  return (
    <div key={name} className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
