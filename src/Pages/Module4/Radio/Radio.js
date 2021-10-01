import React from 'react';
import Radio1 from './Radio1';

const Radio = () => {
  return (
    <div>
      <h1>Radio</h1>
      <li>
        Comparar o valor selecionado com o valor do input dentro de 'checked'
      </li>
      <li>
        'Name' define a qual grupo os inputs pertencem, deixando selecionar
        apenas um
      </li>
      <Radio1 />
    </div>
  );
};

export default Radio;
