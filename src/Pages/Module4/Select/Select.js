import React from 'react';
import Select1 from './Select1';

const Select = () => {
  return (
    <div>
      <h1>Select</h1>
      <li>'Value' e 'onChange' definidos no select</li>
      <li>Valor inicial definido no useState</li>
      <Select1 />
    </div>
  );
};

export default Select;
