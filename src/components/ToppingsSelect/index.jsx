import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [pizza, setPizza] = useState(toppings);

  const handlePizzaChange = (index, idTopping) => {
    const newPizza = [...pizza];
    newPizza[index].checked = idTopping;
    setPizza(newPizza);
  };

  let selectedToppings = 0;
  let totalPrice = 0;

  pizza
    .filter((topping) => topping.checked)
    .forEach((topping) => {
      selectedToppings += 1;
      totalPrice = Math.round((totalPrice + topping.price) * 100) / 100;
    });
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedToppings}, total price: {totalPrice} Euro{' '}
      </p>

      <div className="toppings">
        {pizza.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onPizzaChange={(idTopping) => handlePizzaChange(index, idTopping)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
