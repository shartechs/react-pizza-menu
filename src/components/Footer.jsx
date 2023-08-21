import React from "react";

export default function Footer() {
  const currentHour = new Date().getHours();
  const openingHours = 10;
  const closingHours = 22;
  const isOpen = openingHours <= currentHour && currentHour >= closingHours;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <>
            <p>We are currently open till {closingHours}:00.</p>{" "}
            <button className="btn">Order</button>
          </>
        ) : (
          <p>We are currently closed, but we will open at {openingHours}:00.</p>
        )}
      </div>
    </footer>
  );
}
