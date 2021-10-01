import React from 'react';
import {
  CheckboxMultiplo,
  CheckboxOtimizado,
  CheckboxUnico,
} from './CheckboxEx';

const Checkbox = () => {
  return (
    <div>
      <h1>Checkbox</h1>
      <li>Estado do checkbox relacionado ao checked</li>
      <CheckboxUnico />
      <CheckboxMultiplo />
      <CheckboxOtimizado />
    </div>
  );
};

export default Checkbox;
