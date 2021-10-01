import React from 'react';
import UseCallback2 from './UseCallback2';

const UseCallback = () => {
  return (
    <div>
      <h1>useCallback</h1>
      <li>
        Evita criar uma função que vai ser renderizada toda vez que executar o
        código
      </li>
      <UseCallback2 />
    </div>
  );
};

export default UseCallback;
