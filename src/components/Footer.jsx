import React from "react";

export default function Footer() {
  const currentHour = new Date().getHours();
  const openingHours = 10;
  const closingHours = 22;
  const isOpen = openingHours <= currentHour && currentHour >= closingHours;
  console.log(isOpen);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>We are currently open</p> : <p>We are currently closed</p>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
