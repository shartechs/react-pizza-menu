import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
