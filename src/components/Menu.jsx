import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
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
        </>
      ) : (
        <p>No pizzas available</p>
      )}
    </main>
  );
}
