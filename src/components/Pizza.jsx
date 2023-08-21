import React from "react";

export default function Pizza({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) {
  return (
    <div key={name} className={`pizza ${soldOut ? "sold-out" : null}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
}
