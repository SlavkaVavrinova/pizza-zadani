import React from 'react';
import { usePrefs } from '../../prefs-context';
import './style.css';

const Header = () => {
  const { veganOnly, setVeganOnly } = usePrefs();

  const handleVeganOnly = () => {
    setVeganOnly(!veganOnly);
  };

  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <button className="button" onClick={handleVeganOnly}>
        {!veganOnly ? 'Only vegan toppings ' : 'All toppings'}
      </button>
    </header>
  );
};

export default Header;
