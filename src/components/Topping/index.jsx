import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, onPizzaChange }) => {
  return (
    <div className="topping">
      <Check
        checked={topping.checked}
        onChange={(idTopping) => onPizzaChange(idTopping)}
        veganTopping={topping.vegan}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
