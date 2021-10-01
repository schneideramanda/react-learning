import React from 'react';
import { Input1 } from './Input1';
import Input2 from './Input2';
import TextArea from './TextArea';

const Input = () => {
  return (
    <div>
      <h1>Input / TextArea</h1>
      <li>Estado sempre ligado ao 'value'</li>
      <li>Função atualizadora sempre ligada ao 'onChange'</li>
      <Input1 />
      <Input2 />
      <TextArea />
    </div>
  );
};

export default Input;
