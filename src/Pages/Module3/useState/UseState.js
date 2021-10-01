import React from 'react';
import UseState1 from './UseState1';
import UseState2 from './UseState2';
import UseState3 from './UseState3';

const UseState = () => {
  return (
    <div>
      <h1>useState</h1>
      <li>Representa o estado da aplicação naquele momento </li>
      <UseState1 />
      <UseState2 />
      <UseState3 />
    </div>
  );
};

export default UseState;
